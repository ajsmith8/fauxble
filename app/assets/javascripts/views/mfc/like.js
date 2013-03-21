Fauxble.Views.MfcLike = Backbone.View.extend({
	
	template: JST['mfc/like'],
	
	events: {
		'click #continue' : 'closePopup'
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
		
		setTimeout(function() {
			FB.XFBML.parse();
		}, 0);
		
		return this;
	},
	
	closePopup: function(event) {
		var parent = this.parent_element,
			background = this.background_element;
		
		$(background).removeClass('mfc-popup-background');
		$(parent).empty();
		
		window.location = "http://localhost:3000/auth/facebook";
		//window.location = "http://salty-lowlands-9089.herokuapp.com/auth/facebook";
		//window.location = "http://fusegap.org/auth/facebook";
	}
});