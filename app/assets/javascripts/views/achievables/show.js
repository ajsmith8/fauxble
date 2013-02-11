Fauxble.Views.AchievablesShow = Backbone.View.extend({
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.achievable = options.achievable;
		this.has_earned = options.has_earned;
		
		if (this.has_earned) {
			this.template = JST['achievables/earned'];
		} else {
			this.template = JST['achievables/locked'];
		}
	},
	
	render: function() {
		$(this.el).html(this.template({
			achievable: this.achievable
		}));
		return this;
	}
});