Fauxble.Views.MfcPopup = Backbone.View.extend({
	
	template: JST['mfc/popup'],
	
	events: {
		'click .answer' : 'resultPopup',
		'click #retry' : 'resetQuestion'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
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
				gaEvent('Click', 'Facts', 'MFC Popup', 1);
				
				this.attr.users.trigger('ans', {user: this.user, str: 'yes'});
				result = $(this.el).find('#result_yes');
				setTimeout(function() {
					$(background).removeClass('mfc-popup-background');
					$(parent).empty();
				}, 2300);
			} else {
				gaEvent('Click', 'Facts', 'MFC Popup', 0);
				
				this.attr.users.trigger('ans', {user: this.user, str: 'no'});
				result = $(this.el).find('#result_no');
			}
	
			$(result).removeClass('hide');
		}
	},
	
	resetQuestion: function() {
		$(this.el).find('#result_no').addClass('hide');
		this.answered = false;
	}
});