Fauxble.Views.FeedbacksTab = Backbone.View.extend({
	
	template: JST['feedbacks/tab'],
	
	events: {
		'click' : 'popup'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
	},
	
	render: function() {
		$(this.el).addClass('tab');
		$(this.el).html(this.template());
		
		return this;
	},
	
	popup: function() {
		Fauxble.router.feedbackPopup();
	}
});