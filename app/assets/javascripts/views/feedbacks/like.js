Fauxble.Views.FeedbacksLike = Backbone.View.extend({
	
	template: JST['feedbacks/like'],
	
	events: {
		'click .icon_container' : 'toggleTab',
		'click #close' : 'slideIn',
		'click #dont_show' : 'disable'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.element = options.element;
	},
	
	render: function() {
		$(this.el).html(this.template());
		
		return this;
	},
	
	toggleTab: function() {
		if (this.out) {
			this.out = false;
			this.slideIn();
		} else {
			this.out = true;
			this.popup();
		}
	},
	
	popup: function(event) {
		var url = formatUrl(Backbone.history.getFragment());
		
		if (!this.out) {
			this.out = true;
		}
		

		gaEvent('Feedback', 'Like Tab', url, null);
		this.slideOut();
	},
	
	slideOut: function() {
		var self = this;
		
		if (window.like) {
			$(this.el).find('#dont_show').removeClass('hide');
		}
			
		$(this.element).animate({
			right: '-2px'
		}, 500);
	},
	
	slideIn: function() {
		var self = this;
		
		$(this.element).animate({
			right: '-403px'
		}, 500, function() {
			$(this.el).find('#dont_show').addClass('hide');
		});
	},
	
	disable: function() {
		window.like = false;
		gaEvent('Feedback', 'Like Tab', 'disabled', null);
		this.slideIn();
	}
});