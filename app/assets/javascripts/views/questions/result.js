Fauxble.Views.QuestionsResult = Backbone.View.extend({
	
	template: JST['questions/result'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.attr;
		this.question = options.question;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		
		this.setRoundSpecifics();
	},
	
	setRoundSpecifics: function() {
		if (this.user.get('id') === this.challenge.get('challenger_id')) {
			this.users = {
				current: this.user,
				opponent: this.attr.users.get(this.challenge.get('user_id'))
			};
			this.task = null;
		} else {
			this.users = {
				opponent: this.attr.users.get(this.challenge.get('challenger_id')),
				current: this.user
			};
		}
		
		if (this.question.get('is_slider')) {
			this.correct = this.attr.sliders.where({question_id: this.question.get('id')})[0].getDisplayable().correct;
		} else {
			this.correct = this.attr.answers.where({question_id: this.question.get('id'), is_correct: true})[0].get('title');
		}
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			question: this.question,
			correct: this.correct
		}));
		
		setTimeout(function() {
			self.renderUser(this.users.current, $(this.el).find('#user_right'), true);
			self.renderUser(this.users.opponent, $(this.el).find('#user_left'), false);
		}, 0);
		
		return this;
	},
	
	renderUser: function(user, element, is_right) {
		var view = new Fauxble.Views.UsersResult({
			attr: this.attr,
			challenge: this.challenge,
			question: this.question,
			user: user,
			is_right: is_right
		});
		$(element).html(view.render().el);
	}
});