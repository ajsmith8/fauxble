Fauxble.Views.FeedbacksPopup = Backbone.View.extend({

	template: JST['feedbacks/popup'],

	events: {
		'submit #feedback' : 'submitFeedback',
		'focus textarea' : 'focusInput',
		'blur textarea' : 'blurInput',
		'click #close' : 'close'
	},
	
	initialize: function(options) {
		this.attr =  options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.element = options.element;
		this.url = options.url;
		
		$(window).scrollTop(0);
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
	
	focusInput: function() {
		var element = $(this.el).find('#content');
		
		if ($(element).val() === 'Type feedback here') {
			$(element).val('');
		}
	},
	
	blurInput: function() {
		var element = $(this.el).find('#content');
		
		if (!/\S/.test($(element).val())) {
			$(element).val('Type feedback here');
		}
	},
	
	submitFeedback: function(event) {
		event.preventDefault();
		var content = $(this.el).find('#content').val(),
			id = null;
		
		if (this.user) {
			id = this.user.get('id');
		}
		
		gaEvent('Feedback', 'Submit', this.url, null);
		
		this.attr.feedbacks.create({
			content: content,
			user_id: id
		});
		
		this.showThanks();
	},
	
	showThanks: function() {
		var self = this;
		
		$(this.el).find('#form').addClass('hide');
		$(this.el).find('.close').addClass('hide');
		$(this.el).find('.title_text').addClass('hide');
		$(this.el).find('#thanks').removeClass('hide');
		
		setTimeout(function() {
			self.close();
		}, 2200);	
	}
});
