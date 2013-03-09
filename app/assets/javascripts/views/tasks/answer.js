Fauxble.Views.TasksAnswer = Backbone.View.extend({
	
	template: JST['tasks/answer'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.question = options.question;
		this.task = options.task;
		this.user = this.attr.users.get(this.task.get('user_id'));
		
		if (this.question.get('is_slider')) {
			var slider = this.attr.sliders.where({question_id: this.question.get('id')})[0];
			this.answer = slider.addUnits(slider.roundValue(this.task.get('answer')));
		} else {
			this.answer = this.attr.answers.get(this.task.get('answer_id')).get('title');
		}
	},
	
	render: function() {
		$(this.el).addClass('recent_answer');
		$(this.el).html(this.template({
			user: this.user,
			answer: this.answer
		}));
		
		return this;
	}
});