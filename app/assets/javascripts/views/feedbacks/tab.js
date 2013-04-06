Fauxble.Views.FeedbacksTab = Backbone.View.extend({
	
	template: JST['feedbacks/tab'],
	
	events: {
		'click .tab-container' : 'toggleTab',
		'click #close' : 'slideIn',
		'submit #feedback' : 'submitFeedback',
		'focus textarea' : 'focusInput',
		'blur textarea' : 'blurInput'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.url = null;
		this.out = false;
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
	
	popup: function() {
		var url = Backbone.history.getFragment();
		
		if (!this.out) {
			this.out = true;
		}
		
		this.url = url.replace(/[0-9]/g, '');
		
		gaEvent('Feedback', 'Click Tab', this.url, null);
		this.slideOut();
	},
	
	slideOut: function() {
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
			self.slideIn();
		}, 2200);	
	}
});