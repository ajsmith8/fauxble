Fauxble.Views.PagesMfc = Backbone.View.extend({
	
	template: JST['pages/mfc'],
	
	events: {
		
	},
	
	initialize: function(options) {
		
	},
	
	render: function() {
		$(this.el).html(this.template());
		
		return this;
	}
});