Fauxble.Views.QuestionsAnswers = Backbone.View.extend({
	
	template: JST['questions/answers'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.question = options.question;
		this.tasks = this.attr.tasks.getRecents(this.question, 5);
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			for (var i = 0, len = self.tasks.length; i < len; i++) {
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
		this.subviews.push(view);
		$(this.el).append(view.render().el);
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