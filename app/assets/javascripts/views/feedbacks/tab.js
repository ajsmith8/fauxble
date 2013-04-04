Fauxble.Views.FeedbacksTab = Backbone.View.extend({
	
	template: JST['feedbacks/tab'],
	
	events: {
		'click' : 'popup'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
	},
	
	render: function() {
		$(this.el).html(this.template());
		
		return this;
	},
	
	popup: function() {
		var url = Backbone.history.getFragment();
			
		url = url.replace(/[0-9]/g, '');
		
		gaEvent('Feedback', 'Click Tab', url, null);
		Fauxble.router.feedbackPopup(url);
	}
});