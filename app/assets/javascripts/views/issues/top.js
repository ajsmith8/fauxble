Fauxble.Views.IssuesTop = Backbone.View.extend({
	
	template: JST['issues/top'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issues = options.issues;
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
		var view = new Fauxble.Views.IssuesShow({ //better fix that at some point eh?
			attr: this.attr,
			issue: issue
		});
		$(this.el).append(view.render().el);
	}
});