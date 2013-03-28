Fauxble.Views.PagesIndex = Backbone.View.extend({
	
	template: JST['pages/index'],
	
	events: {
		
	},
	
	initialize: function(options) {
		
	},
	
	render: function() {
		$(this.el).html(this.template());
		
		return this;
	}
});

// standard issue index view like pacific-hollows