Fauxble.Views.UsersIndex = Backbone.View.extend({
	
	template: JST['users/index'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.users = options.users;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			for (var u = 0, len = self.users.length; u < len; u++) {
				self.appendUser(self.users[u]);
			}
		}, 0);
		
		return this;
	},
	
	appendUser: function(user) {
		var view = new Fauxble.Views.UsersTop({
			attr: this.attr,
			user: user
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