Fauxble.Views.PagesInfo = Backbone.View.extend({
	
	template: JST['pages/info'],
	
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
// user name, picture, global stars
// 5 most popular issues
// chat coming soon