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
		
		if (url.split('new').length > 1) {
			url = 'new';
		}
		
		if (url.split('issue').length > 1) {
			if (url.split('issues').length > 1) {
				url = 'issues';
			} else {
				url = 'issue';
			}
		}
		
		if (url.split('challenge').length > 1) {
			url = 'challenge';
		}
		
		if (url.split('question').length > 1) {
			url = 'question';
		}
		
		if (url.split('user').length > 1) {
			url = 'user';
		}
		
		gaEvent('Feedback', 'Click Tab', url, null);
		Fauxble.router.feedbackPopup(url);
	}
});