Fauxble.Views.PagesChat = Backbone.View.extend({
	
	template: JST['pages/chat'],
	
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