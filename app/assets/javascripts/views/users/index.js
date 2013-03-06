Fauxble.Views.UsersIndex = Backbone.View.extend({
	
	template: JST['users/index'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.users = options.users; // {user:   , rank:  }
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			for (i = 0; i < self.users.length; i++) {
				self.appendUser(self.users[i]);
			}
		}, 0);
		
		return this;
	},
	
	appendUser: function(user) {
		var view = new Fauxble.Views.UsersTop({
			attr: this.attr,
			user: user
		});
		$(this.el).append(view.render().el);
	}
});