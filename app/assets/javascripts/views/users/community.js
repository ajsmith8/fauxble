Fauxble.Views.UsersCommunity = Backbone.View.extend({
	
	template: JST['users/community'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
	},
	
	render: function() {
		$(this.el).html(this.template({
			user: this.user
		}));
		
		return this;
	}
});