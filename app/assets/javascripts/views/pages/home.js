Fauxble.Views.PagesHome = Backbone.View.extend({
	
	template: JST['pages/home'],
	
	events: {
		'click #get_started' : 'pagesMfc',
		'click .like-button' : 'gaEvent'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
	},
	
	render: function() {
		$(this.el).addClass('home_images_container');
		$(this.el).html(this.template());
		return this;
	},
	
	pagesMfc: function() {
		gaEvent('Click', 'Get Started', 'Landing Page', null);
		
		Backbone.history.navigate('million-fact-challenge', true);
	},
	
	gaEvent: function() {
		gaEvent('Click', 'Like', 'Landing Page', null);
	}
});