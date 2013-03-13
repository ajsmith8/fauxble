Fauxble.Views.PagesAbout = Backbone.View.extend({
	
	template: JST['pages/about'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
	},
	
	render: function() {
		$(this.el).html(this.template());
		
		return this;
	}
});