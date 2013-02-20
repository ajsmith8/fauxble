Fauxble.Views.PopupsAchievable = Backbone.View.extend({
	
	template: JST['popups/achievable'],
	
	events: {
		'click .achievable' : 'closePopup'
	},
	
	initialize: function(options) {
		this.achievable = options.achievable;
	},
	
	render: function() {
		$(this.el).addClass('achievable');
		$(this.el).html(this.template({
			achievable: this.achievable
		}));
		$(this.el).animate({
			top: '+=100'
		}, 500);
		return this;
	},
	
	closePopup: function() {
		$(this.el).animate({
			top: '-=100'
		}, 500, function() {
			$(this.el).parent().empty();
		});
	}
});