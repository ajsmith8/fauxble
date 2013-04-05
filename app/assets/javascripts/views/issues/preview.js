Fauxble.Views.IssuesPreview = Backbone.View.extend({
	
	template: JST['issues/preview'],
	
	events: {
		'click' : 'issueShow'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
	},
	
	render: function() {
		$(this.el).addClass('issue-panel');
		$(this.el).html(this.template({
			issue: this.issue
		}));
		
		return this;
	},
	
	issueShow: function() {
		this.issue.show();
	}
});