Fauxble.Views.FeedbacksLike = Backbone.View.extend({
	
	template: JST['feedbacks/like'],
	
	events: {
		'click' : 'popup',
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
	
	popup: function(event) {
		if ($(event.target).attr('id') !== 'close' && $(event.target).attr('id') !== 'dont_show') {
			var url = Backbone.history.getFragment();

			url = url.replace(/[0-9]/g, '');

			gaEvent('Feedback', 'Like Tab', url, null);
			this.slideOut();
		}
	},
	
	slideOut: function() {
		var old_ele = $(this.el).find('.like-tab'),
			new_ele = $(this.el).find('#close');
			
		$(this.element).animate({
			right: '0'
		}, 500, function() {
			$(old_ele).addClass('hide');
			$(new_ele).removeClass('hide');
		});
	},
	
	slideIn: function() {
		var new_ele = $(this.el).find('.like-tab'),
			old_ele = $(this.el).find('#close'),
			disable = $(this.el).find('#dont_show');
			
		$(this.element).animate({
			right: '-164px'
		}, 500, function() {
			$(old_ele).addClass('hide');
			$(new_ele).removeClass('hide');
			$(disable).addClass('hide');
		});
	},
	
	disable: function() {
		window.like = false;
		
		this.slideIn();
	},
	
	slideOutTimed: function() {
		var old_ele = $(this.el).find('.like-tab'),
			new_ele = $(this.el).find('#close'),
			disable = $(this.el).find('#dont_show');
			
		$(this.element).animate({
			right: '0'
		}, 500, function() {
			$(old_ele).addClass('hide');
			$(new_ele).removeClass('hide');
			$(disable).removeClass('hide');
		});
	}
});