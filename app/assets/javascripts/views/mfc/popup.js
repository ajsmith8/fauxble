Fauxble.Views.MfcPopup = Backbone.View.extend({
	
	template: JST['mfc/popup'],
	
	events: {
		'click .answer' : 'resultPopup'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.parent_element = options.element;
		this.background_element = options.background;
	},
	
	render: function() {
		$(this.background_element).addClass('mfc-popup-background');
		$(this.el).addClass('mfc-popup');

		$(this.el).html(this.template());
		
		return this;
	},
	
	resultPopup: function(event) {
		var element = $(event.target).closest('.answer'),
			parent = this.parent_element,
			background = this.background_element,
			result;
		
		if (!this.answered) {	
			this.answered = true;
			if ($(element).hasClass('yes')) {
				result = $(this.el).find('#result_yes');
				setTimeout(function() {
					$(background).removeClass('mfc-popup-background');
					$(parent).empty();
				}, 1000);
			} else {
				result = $(this.el).find('#result_no');
			}
	
			$(result).removeClass('hide');
		}
	}
});