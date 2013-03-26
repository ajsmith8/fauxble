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
		console.log('ga event');
		_gaq.push(['_trackEvent', 'get started', 'mfc', 'landing page', 1]);
		
		Backbone.history.navigate('mfc', true);
	},
	
	gaEvent: function() {
		console.log('ga event');
		_gaq.push(['_trackEvent', 'liked', 'potential', 'landing page', 1]);
	}
});