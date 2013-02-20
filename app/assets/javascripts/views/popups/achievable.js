Fauxble.Views.PopupsAchievable = Backbone.View.extend({
	
	template: JST['popups/achievable'],
	
	events: {
		'click' : 'closePopup'
	},
	
	initialize: function(options) {
		this.achievable = options.achievable;
	},
	
	render: function() {
		var self = this;
		
		$(this.el).addClass('achievable');
		$(this.el).html(this.template({
			achievable: this.achievable
		}));
		
		setTimeout(function() {
			$(self.el).animate({
				top: '7px'
			}, 500);
		}, 0);
		
		return this;
	},
	
	closePopup: function() {
		var self = this;
		
		$(this.el).animate({
			top: '-150px'
		}, 500, function() {
			$(self.el).parent().removeClass('achievable_big_background');
			$(self.el).parent().empty();
		});
	}
});