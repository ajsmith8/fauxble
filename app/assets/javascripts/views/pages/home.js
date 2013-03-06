Fauxble.Views.PagesHome = Backbone.View.extend({
	
	template: JST['pages/home'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		
		this.attr.users.trigger('scope', {is_global: true, is_question: false});
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});
//video