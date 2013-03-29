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
		var issues = this.attr.issues.toArray(),
			self = this;
		
		setTimeout(function() {
			for (var i = 0, len = issues.length; i < len; i++) {
				var issue = issues[i],
					num = self.attr.questions.getNumQuestions(issue);
				
				if (num > 3) {
					self.appendIssue(issue, num);
				}
			}
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
