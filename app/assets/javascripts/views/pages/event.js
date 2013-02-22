Fauxble.Views.PagesEvent = Backbone.View.extend({
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.model = options.feed.obj;
		this.type = options.feed.type;
		
		if (this.type === 'user_achievable') {
			this.template = JST['pages/ua_event'];
		} else if (this.type === 'challenge') {
			this.template = JST['pages/c_event'];
		} else {
			this.template = JST['pages/u_event'];
		}
	},
	
	render: function() {
		return this;
	}
});