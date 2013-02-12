Fauxble.Views.IssuesIndex = Backbone.View.extend({
	
	template: JST['issues/index'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.subviews = [];
	},
	
	render: function() {
		var self = this,
			num_questions;
		setTimeout(function() {
			this.attr.issues.each(function(issue) {
				num_questions = self.attr.questions.getNumQuestions(issue);
				if (num_questions > 3) {
					self.appendIssue(issue, num_questions);
				}
			});
		}, 0);
		
		return this;
	},
	
	appendIssue: function(issue, num_questions) {
		var view = new Fauxble.Views.IssueShow({
			attr: this.attr,
			issue: issue,
			challenge: this.challenge,
			num_questions: num_questions
		});
		this.subviews.push(view);
		$(this.el).append(view.render().el);
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
