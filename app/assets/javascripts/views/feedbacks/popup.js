Fauxble.Views.FeedbacksPopup = Backbone.View.extend({

	template: JST['feedbacks/popup'],

	events: {
		'submit #feedback' : 'submitFeedback',
		'click #close' : 'close'
	},
	
	initialize: function(options) {
		this.attr =  options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.element = options.element;
	},
	
	render: function() {
		$(this.el).addClass('mfc-popup');
		$(this.element).addClass('feedback-background');
		$(this.el).html(this.template());
		
		return this;
	},
	
	close: function() {
		$(this.element).removeClass('feedback-background');
		$(this.el).parent().empty();
	},
	
	submitFeedback: function(event) {
		event.preventDefault();
		var content = $(this.el).find('#content').val(),
			id = null;
		
		if (this.user) {
			id = this.user.get('id');
		}
		
		this.attr.feedbacks.create({
			content: content,
			user_id: id
		});
		
		this.showThanks();
	},
	
	showThanks: function() {
		var self = this;
		
		$(this.el).find('#form').addClass('hide');
		$(this.el).find('#thanks').removeClass('hide');
		
		setTimeout(function() {
			self.close();
		}, 2000);	
	}
});
