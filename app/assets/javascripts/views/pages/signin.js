Fauxble.Views.PagesSignin = Backbone.View.extend({
	
	template: JST['pages/signin'],
	id: 'signin',
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		
		$(this.el).addClass('signin button');
		$(this.el).html(this.template());
		
		return this;
	}
});