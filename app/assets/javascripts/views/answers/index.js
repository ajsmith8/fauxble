Fauxble.Views.AnswersIndex = Backbone.View.extend({
	
	template: JST['answers/index'],
	
	events: {
		'click .answer' : 'submitAnswer',
		'click #next' 	: 'nextQuestion',
		'click #source' : 'goToSource',
		'click #start_timer' : 'revealAnswers',
		'click #share' 	: 'fbShare'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.question = options.question;
		this.next_question = options.next_question;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.answers = _.shuffle(this.attr.answers.where({question_id: this.question.get('id')}));
		this.is_answered = false;
		this.time = 15000;
		this.timer = this.time;
		this.subviews = [];
		
		this.setRoundSpecifics();
	},
	
	setRoundSpecifics: function() {
		if (this.user.get('id') === this.challenge.get('challenger_id')) {
			this.answer_template = JST['answers/show_first'];
			this.users = {
				challenger: this.user,
				user: null
			};
			this.task = null;
		} else {
			this.answer_template = JST['answers/show_second'];
			this.users = {
				challenger: this.attr.users.get(this.challenge.get('challenger_id')),
				user: this.user
			};
			this.task = this.attr.tasks.where({
				user_id: this.users.challenger.get('id'), 
				challenge_id: this.challenge.get('id'), 
				question_id: this.question.get('id')
			})[0];
		}
	},
	
	render: function() {
		var self = this;
		$(this.el).addClass('multiple-choice');
		$(this.el).html(this.template());
		return this;
	},
	
	revealAnswers: function() {
		var answers = this.answers;
		
		$(this.el).find('#answers').empty();
		$(this.el).find('.timer.container').removeClass('hide');
		
		for (var a = answers.length; a > 0; a--) {
			var answer = answers[a - 1];
			
			this.appendAnswer(answer);
		}
		
		this.startTimer();
	},
	
	appendAnswer: function(answer) {
		var view = new Fauxble.Views.AnswersShow({
			attr: this.attr,
			answer: answer,
			users: this.users,
			template: this.answer_template
		});
		this.subviews.push(view);
		$(this.el).find('#answers').append(view.render().el);
	},
	
	startTimer: function() {
		var self = this,
			element = $(this.el).find('#timer'),
			inter;
			
		inter = setInterval(function() {
			if (self.task) {
				self.showChallenger(self.timer);
			}
			
			$(element).css('width', (Math.round((self.timer / self.time) * 10000) / 100) + '%');
			self.timer = self.timer - 100;
			
			if (self.stopTimer(self.timer)) {
				if (self.timer < 0) {
					self.timer = 0;
				}
				clearInterval(inter);
			}
		}, 100);
	},
	
	stopTimer: function(time) {
		if (time <= 0 || this.is_answered) {
			return true;
		} else {
			return false;
		}
	},
	
	showChallenger: function(time) {		
		if (parseInt(this.task.get('time')) === time) {
			$(this.el).find('.answer#' + this.task.get('answer_id')).find('#challenger').removeClass('hide');
		}
	},
	
	submitAnswer: function(event) {
		var answer_id = parseInt($(event.target).closest('.answer').attr('id')),
			score,
			task;
			
		if (!this.is_answered) {
			this.is_answered = true;
			if (this.attr.answers.get(answer_id).get('is_correct')) {
				score = Math.round(this.timer / 150);
			} else {
				score = 0;
			}
			task = this.attr.tasks.createTask(this.question, this.challenge, this.user, answer_id, null, score, this.timer, this.attr.ranks);
			if (task) {
				score = task.get('score');
			}
			this.user.trigger('submit', score);
			
			if (this.task) {
				this.attr.users.get(this.task.get('user_id')).trigger('submit', this.task.get('score'));
				this.challenge.set({user_score: this.challenge.get('user_score') + score});
				this.showRageComic(score);
			} else {
				this.challenge.set({challenger_score: this.challenge.get('challenger_score') + score});
			}
			
			this.challenge.save();
			this.showCorrectAnswer(this.attr.answers.where({question_id: this.question.get('id'), is_correct: true})[0]);
			this.showUser(answer_id);
			this.showPoints(answer_id, score);
			this.showNextAndSource();
		}
	},
	
	showUser: function(answer_id) {
		if (this.task) {
			$(this.el).find('.answer#' + answer_id).find('#user').removeClass('hide');
			$(this.el).find('.answer#' + this.task.get('answer_id')).find('#challenger').removeClass('hide');
		} else {
			$(this.el).find('.answer#' + answer_id).find('#challenger').removeClass('hide');
		}
	},
	
	showPoints: function(answer_id, score) {
		if (this.task) {
			$(this.el).find('.answer#' + this.task.get('answer_id')).find('#challenger_score').html('+ ' + this.task.get('score'));
			$(this.el).find('.answer#' + answer_id).find('#user_score').html('+ ' + score);
		} else {
			$(this.el).find('.answer#' + answer_id).find('#challenger_score').html('+ ' + score);
		}
	},
	
	showCorrectAnswer: function(answer) {
		$(this.el).find('.answer#' + answer.get('id')).find('#check').removeClass('hide');
	},
	
	showRageComic: function(score) {
		var is_win = false,
			view;
			
		if (score >= this.task.get('score')) {
			is_win = true;
		}
		
		view = new Fauxble.Views.QuestionsRage({
			is_win: is_win
		});
		this.subviews.push(view);
		$(this.el).find('#rage').html(view.render().el);
	},
	
	showNextAndSource: function() {
		$(this.el).find('#after_submit').removeClass('hide');
	},
	
	goToSource: function() {
		gaEvent('Source', 'Question', String(this.question.get('id')), null);
		window.open(this.attr.sources.where({question_id: this.question.get('id')})[0].get('url'), '_blank');
	},
	
	nextQuestion: function() {
		if (this.next_question) {
			Backbone.history.navigate('question' + this.challenge.get('id') + '/' + this.next_question.get('id'), true);
		} else {
			this.challenge.setSentOrFinished(this.task);
			Backbone.history.navigate('results' + this.challenge.get('id'), true);
		}
	},
	
	fbShare: function() {
		var user = this.user,
			issue = this.attr.issues.get(this.question.get('issue_id')),
			question = this.question;
		
		if (user.get('uid')) {
			var obj = { 
				method: 'feed', 
				link: 'http://fusegap.org', 
				name: 'fuseGap', 
				to: user.get('uid'),
				picture: 'http://fusegap.org/assets/issues/' + issue.get('image') + '.png',
				caption: question.get('title'), 
				description: ''
			};
			function callback(response) 
			{
				if (response) {
					gaEvent('Share', 'Question', String(user.get('id')), null);
					window.Fauxble.router.thanksPopup();
				} else {
					//close
				}
	        }
			FB.ui(obj, callback);
		} else {
			window.Fauxble.router.fbSignInPopup();
		}
	},
	
	onClose: function() {
		var views = this.subviews;
		
		for (var v = views.length; v > 0; v--) {
			var view = views[v - 1];
			
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		}
	}
});