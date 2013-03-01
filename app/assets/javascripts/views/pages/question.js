Fauxble.Views.PagesQuestion = Backbone.View.extend({
	
	template: JST['pages/question'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.question = options.question;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			number: this.getQuestionNumber(),
			total: this.challenge.get('question_ids').split('/').length
		}));
		
		setTimeout(function() {
			self.questionShow();
		}, 0);
		return this;
	},
	
	questionShow: function() {
		var view = new Fauxble.Views.QuestionsShow({
			attr: this.attr,
			question: this.question,
			next_question: this.getNextQuestion(this.challenge),
			challenge: this.challenge
		});
		this.subviews.push(view);
		$(this.el).find('#question').html(view.render().el);
	},
	
	getNextQuestion: function(challenge) {
		var ids = challenge.get('question_ids').split('/'),
			question = null;
		
		for (i = 0; i < ids.length; i++) {
			if (parseInt(ids[i]) !== this.question.get('id') && i > ids.indexOf(String(this.question.get('id')))) {
				question = this.attr.questions.get(parseInt(ids[i]));
				break;
			}
		}
		
		return question;
	},
	
	getQuestionNumber: function() {
		var ids = this.challenge.get('question_ids').split('/'),
			question_num = 4;
		
		if (this.challenge.get('issue_id') === 20) {
			question_num = 8;
		}
		
		for (n = 0; n < ids.length; n ++) {
			if (parseInt(ids[n]) === this.question.get('id')) {
				question_num = n + 1;
				break;
			}
		}
		
		return question_num;
	},
	
	onClose: function() {
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});
//empty versus div onClose