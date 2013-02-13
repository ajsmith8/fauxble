Fauxble.Views.UsersAutoResult = Backbone.View.extend({
	
	template: JST['users/auto_results'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.title = options.title;
		this.user = options.user;
	},
	
	render: function() {
		$(this.el).addClass('autocom-result');
		$(this.el).attr('id', this.user.get('id'));
		$(this.el).html(this.template({
			title: this.title,
			user: this.user
		}));
		return this;
	}
});