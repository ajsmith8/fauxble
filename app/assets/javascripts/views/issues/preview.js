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
		$(this.el).html(this.template({
			issue: this.issue
		}));
		
		return this;
	},
	
	issueShow: function() {
		Backbone.history.navigate('issue' + this.issue.get('id'), true);
	}
});