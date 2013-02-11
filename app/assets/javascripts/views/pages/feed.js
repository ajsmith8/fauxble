Fauxble.Views.PagesFeed = Backbone.View.extend({
	
	template: JST['pages/feed'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.subviews = [];
	}, 
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.renderUser();
			self.TopIssues();
			self.renderChat();
		}, 0);
		
		return this;
	},
	
	renderUser: function() {
		var view = new Fauxble.Views.UsersShow({ //not sure
			attr: this.attr,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#user').html(view.render().el);
	},
	
	renderTopIssues: function() {
		var view = new Fauxble.Views.IssuesTop({
			attr: this.attr,
			issues: this.attr.issues.getTopIssues(5);
		});
		this.subviews.push(view);
		$(this.el).find('#issues').html(view.render().el);
	},
	
	renderChat: function() {
		var view = new Fauxble.Views.PagesChat({
			attr: this.attr
		});
		this.subviews.push(view);
		$(this.el).find('#chat').html(view.render().el);
	}
});
//show user global rank
//show top 5 issues
//chat coming soon