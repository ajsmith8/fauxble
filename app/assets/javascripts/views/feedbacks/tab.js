Fauxble.Views.FeedbacksTab = Backbone.View.extend({
	
	template: JST['feedbacks/tab'],
	
	events: {
		'click .tab-container' : 'popup',
		'click #close' : 'slideIn'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
	},
	
	render: function() {
		$(this.el).html(this.template());
		
		return this;
	},
	
	popup: function(event) {
		var url = Backbone.history.getFragment();
			
		url = url.replace(/[0-9]/g, '');
		
		gaEvent('Feedback', 'Click Tab', url, null);
		this.slideOut(event);
	},
	
	slideOut: function(event) {
		var self = this;
		
		$(this.el).parent('.feedback').animate({
			right: '0'
		});
	},
	
	slideIn: function() {
		var self = this;
			
		$(this.el).parent('.feedback').animate({
			right: '-401px'
		});
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