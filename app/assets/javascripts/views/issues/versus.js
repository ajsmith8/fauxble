Fauxble.Views.IssuesVersus = Backbone.View.extend({
	
	template: JST['issues/versus'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge
		this.issue = this.attr.issues.get(this.challenge.get('issue_id'));
		this.user = this.attr.users.get(this.challenge.get('user_id'));
		this.challenger = this.attr.users.get(this.challenge.get('challenger_id'));
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).addClass('issue versus');
		$(this.el).html(this.template({
			issue: this.issue
		}));
		
		setTimeout(function() {
			self.renderUser(self.user, $(self.el).find('#user'), false);
			self.renderUser(self.challenger, $(self.el).find('#challenger'), true);
		}, 0);
		
		return this;
	},
	
	renderUser: function(user, element, left_aligned) {
		var view = new Fauxble.Views.UsersVersus({
			attr: this.attr,
			issue: this.issue,
			user: user,
			left_aligned: left_aligned
		});
		this.subviews.push(view);
		$(element).html(view.render().el);
	}
});