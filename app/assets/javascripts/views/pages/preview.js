Fauxble.Views.PagesPreview = Backbone.View.extend({
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issues = this.attr.issues.toArray();
	},
	
	render: function() {
		var self = this;
		
		$(this.el).addClass('issue-list');
		
		setTimeout(function() {
			for (var i = 0; i < self.issues.length; i++) {
				self.appendIssue(self.issues[i]);
			}
		}, 0);
		
		return this;
	},
	
	appendIssue: function(issue) {
		var view = new Fauxble.Views.IssuesPreview({
			attr: this.attr,
			issue: issue
		});
		$(this.el).append(view.render().el);
	}
});