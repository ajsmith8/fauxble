Fauxble.Views.UsersFace = Backbone.View.extend({
	
	template: JST['users/face'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.is_current_user = options.is_current_user;
	},
	
	render: function() {	
		$(this.el).addClass('community_user');
		$(this.el).html(this.template({
			user: this.user,
			is_you: this.is_current_user
		}));
		return this;
	}
});