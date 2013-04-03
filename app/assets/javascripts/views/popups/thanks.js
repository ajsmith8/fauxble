Fauxble.Views.PopupsThanks = Backbone.View.extend({
	
	template: JST['popups/thanks'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.element = options.element;
	},
	
	render: function() {
		$(this.el).addClass('mfc-popup');
		$(this.element).addClass('tutorial-background');
		$(this.el).html(this.template());
		this.timedClose();
		return this;
	},
	
	close: function() {
		$(this.element).removeClass('tutorial-background');
		$(this.el).parent().empty();
	},
	
	timedClose: function() {
		var self = this;
		
		setTimeout(function() {
			self.close();
		}, 2000);
	}
});