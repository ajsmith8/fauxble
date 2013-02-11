Fauxble.Views.UsersVersus = Backbone.View.extend({
	
	template: JST['users/versus'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.user = options.user;
		this.left_aligned = options.left_aligned;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).addClass('user versus');
		$(this.el).html(this.template({
			user: this.user,
			left_aligned: this.left_aligned
		}));
		
		setTimeout(function() {
			self.renderIssueRank();
		}, 0);
		
		return this;
	},
	
	renderIssueRank: function() {
		var view = new Fauxble.Views.RanksIssue({
			attr: this.attr,
			issue: this.issue,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#rank').html(view.render().el);
	}
});