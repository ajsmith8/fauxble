Fauxble.Views.PagesHeader = Backbone.View.extend({
	
	template: JST['pages/header'],
	
	events: {
		
	},
	
	initialize: function(options) {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});
//header