Fauxble.Views.PagesHeader = Backbone.View.extend({
	
	template: JST['pages/header'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.renderProfile();
		}, 0);
		
		return this;
	},
	
	renderProfile: function() {
		var view = new Fauxble.Views.UsersShow({
			attr: this.attr,
			user: this.user,
			is_sidebar: true
		});
		$(this.el).find('#profile').html(view.render().el);
	}
});
//header