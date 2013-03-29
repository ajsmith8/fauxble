Fauxble.Views.PagesPreview = Backbone.View.extend({
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issues = this.attr.issues.toArray();
		
		this.issues.sort(function(a, b) {
			 if (a.get('title') > b.get('title')) {
				return 1;
			}
			 if (a.get('title') < b.get('title')) {
				return -1
			}
			return 0;
		});
		
		this.subviews = [];
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