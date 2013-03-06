Fauxble.Views.QuestionsAnswers = Backbone.View.extend({
	
	template: JST['questions/answers'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.question = options.question;
		this.tasks = this.attr.tasks.getRecents(this.question, 5);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			for (i = 0; i < self.tasks.length; i++) {
				self.appendAnswer(self.tasks[i]);
			}
		}, 0);
		
		return this;
	},
	
	appendAnswer: function(task) {
		var view = new Fauxble.Views.TasksAnswer({
			attr: this.attr,
			question: this.question,
			task: task
		});
		$(this.el).append(view.render().el);
	}
});