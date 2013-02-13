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
			self.renderIssues();
		}, 0);
		
		return this;
	},
	
	renderUser: function() {
		var view = new Fauxble.Views.UsersShow({ //not sure
			attr: this.attr,
			user: this.user,
			is_sidebar: true
		});
		this.subviews.push(view);
		$(this.el).find('#user').html(view.render().el);
	},
	
	renderIssues: function() {
		var view = new Fauxble.Views.IssuesTop({
			attr: this.attr,
			issues: this.attr.issues.getTopIssues(5)
		});
		this.subviews.push(view);
		$(this.el).find('#issues').html(view.render().el);
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