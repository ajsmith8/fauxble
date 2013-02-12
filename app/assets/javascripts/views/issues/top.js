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
		var self = this;
		$(this.el).addClass('popular');
		$(this.el).html(this.template());
		
		setTimeout(function() {
			_.each(self.issues, function(issue) {
				self.appendIssue(issue);
			});
		}, 0);
		
		return this;
	},
	
	appendIssue: function(issue) {
		var view = new Fauxble.Views.IssuesShowTop({ //better fix that at some point eh?
			attr: this.attr,						// need a new issue view with a rank ie: 14 of 175
			issue: issue
		});
		this.subviews = [];
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