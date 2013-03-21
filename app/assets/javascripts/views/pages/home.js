Fauxble.Views.PagesHome = Backbone.View.extend({
	
	template: JST['pages/home'],
	
	events: {
		'click #get_started' : 'pagesMfc'
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
		Backbone.history.navigate('mfc', true);
	}
});