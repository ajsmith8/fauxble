Fauxble.Views.IssuesShowTop = Backbone.View.extend({
	
	template: JST['issues/show_top'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
	},
	
	render: function() {
		$(this.el).addClass('issue');
		$(this.el).html(this.template({
			issue: this.issue,
			rank: this.attr.ranks.getRank(this.attr.users, this.user, this.issue)
		}));
	}
});