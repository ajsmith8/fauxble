Fauxble.Views.MfcLike = Backbone.View.extend({
	
	template: JST['mfc/like'],
	
	events: {
		'click #continue' : 'closePopup',
		'click .like-button' : 'gaEvent'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.parent_element = options.element;
		this.background_element = options.background;
	},
	
	render: function() {
		$(this.background_element).addClass('mfc-popup-background');
		$(this.el).addClass('mfc-popup');

		$(this.el).html(this.template());
		
		return this;
	},
	
	closePopup: function(event) {
		var parent = this.parent_element,
			background = this.background_element;
		
		this.attr.users.trigger('continue', {user: this.attr.users.get(this.attr.current_user.get('id')), view: this});
		$(background).removeClass('mfc-popup-background');
		$(parent).empty();
	},
	
	fbLogin: function() {
		gaEvent('Login', 'Facebook', 'MFC Like', null);
		fbLogin();
	},
	
	gaEvent: function() {
		gaEvent('Click', 'Like', 'MFC Like', null);
	}
});