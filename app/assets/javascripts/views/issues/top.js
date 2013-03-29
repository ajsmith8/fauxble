Fauxble.Views.IssuesTop = Backbone.View.extend({
	
	template: JST['issues/top'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issues = options.issues;
		this.subviews = [];
	},
	
	render: function() {
		var issues = this.issues,
			self = this;
		
		$(this.el).addClass('popular');
		$(this.el).html(this.template());
		
		setTimeout(function() {
			for (var i = 0, len = issues.length; i < len; i++) {
				self.appendIssue(issues[i]);
			}
		}, 0);
		
		return this;
	},
	
	appendIssue: function(issue) {
		var view = new Fauxble.Views.IssuesShowTop({
			attr: this.attr,						
			issue: issue
		});
		this.subviews = [];
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