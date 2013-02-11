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
	}
});
//empty versus div onClose