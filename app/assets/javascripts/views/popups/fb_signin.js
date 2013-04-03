Fauxble.Views.PopupsFbSignin = Backbone.View.extend({
	
	template: JST['popups/fb_signin'],
	
	events: {
		'click #close' : 'close',
		'click #fb_login' : 'fbLogin'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.element = options.element;
	},
	
	render: function() {
		$(this.el).addClass('mfc-popup');
		$(this.element).addClass('tutorial-background');
		$(this.el).html(this.template());
		
		return this;
	},
	
	close: function() {
		$(this.element).removeClass('tutorial-background');
		$(this.el).parent().empty();
	},
	
	fbLogin: function() {
		gaEvent('Login', 'Facebook', 'Fb Sign In Popup', null);
		fbLogin();
	}
});