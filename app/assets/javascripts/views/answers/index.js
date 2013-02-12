Fauxble.Views.AnswersIndex = Backbone.View.extend({
	
	template: JST['answers/index'],
	
	events: {
		'click .answer' : 'submitAnswer',
		'click #next' 	: 'nextQuestion',
		'click #source' : 'goToSource'
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
		
		setTimeout(function() {
			_.each(self.answers, function(answer) {
				self.appendAnswer(answer);
				self.startTimer();
			});
		}, 0);
		
		return this;
	},
	
	appendAnswer: function(answer) {
		var view = new Fauxble.Views.AnswersShow({
			attr: this.attr,
			answer: answer,
			users: this.users,
			template: this.answer_template
		});
		$(this.el).find('#answers').append(view.render().el);
	},
	
	startTimer: function() {
		var self = this,
			inter;
		this.timer = this.time;
			
		inter = setInterval(function() {
			if (self.stopTimer(self.timer)) {
				if (self.timer < 0) {
					self.timer = 0;
				}
				clearInterval(inter);
			}
			
			if (self.task) {
				self.showChallenger(self.timer);
			}
			
			self.timer = self.timer - 100;
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
		if (parseInt(this.task.get('time') * 1000) === this.time - time) {
			$(this.el).find('.answer#' + this.task.get('answer_id')).find('#challenger').removeClass('hide');
		}
	},
	
	submitAnswer: function(event) {
		var answer_id = parseInt($(event.target).closest('.answer').attr('id')),
			score,
			task;
			
		if (!this.is_answered) {
			this.is_answered = true;
			score = Math.round((this.time - this.timer) / 150);
			task = this.attr.tasks.createTask(this.question, this.challenge, this.user, answer_id, null, score, this.timer);
			
			if (this.task) {
				this.showRageComic(task);
			}
			
			this.showUser(answer_id);
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
	
	showRageComic: function(task) {
		var is_win = false,
			view;
			
		if (task.get('score') >= this.task.get('score')) {
			is_win = true;
		}
		
		view = new Fauxble.Views.QuestionsRage({
			is_win: is_win
		});
		$(this.el).find('#rage').html(view.render().el);
	},
	
	showNextAndSource: function() {
		$(this.el).find('#after_submit').removeClass('hide');
	},
	
	goToSource: function() {
		window.open(this.attr.sources.where({question_id: this.question.get('id')})[0].get('url'), '_blank');
	},
	
	nextQuestion: function() {
		if (this.next_question) {
			Backbone.history.navigate(this.challenge.get('id') + '/question' + this.next_question.get('id'), true);
		} else {
			this.challenge.setSentOrFinished(this.task);
			Backbone.history.navigate('challenge' + this.challenge.get('id'), true);
		}
	}
});