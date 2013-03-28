Fauxble.Views.PopupsSignin = Backbone.View.extend({
	
	template: JST['popups/signin'],
	
	events: {
		'click #close' : 'close',
		'click #fb_login' : 'fbLogin',
		'click #email_signup' : 'toggleForm',
		'focus input' : 'focusInput',
		'blur input' : 'blurInput',
		'submit #signup' : 'createUser'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.element = options.element;
	},
	
	render: function() {
		$(this.el).addClass('mfc-popup');
		$(this.element).addClass('tutorial-background');
		$(this.el).html(this.template());
		
		return this;
	},
	
	close: function() {
		$(this.element).removeClass('tutorial-background');
		$(this.el).parent().empty();
	},
	
	fbLogin: function() {
		gaEvent('Login', 'Facebook', 'Sign In Popup', null);
		fbLogin();
	},
	
	toggleForm: function() {
		var element = $(this.el).find('#signup_form');
		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
			$(window).scrollTop($(window).scrollTop() + 250);
		} else {
			$(element).addClass('hide');
		}
	},
	
	focusInput: function(event) {
		var element = $(event.target).closest('input');
		
		if ($(element).val() === $(element).attr('id').replace('_', ' ')) {
			$(element).val('');
			
			if ($(element).attr('id').split('Password').length > 1) {
				$(element).attr('type', 'password');
			}
		}
	},
	
	blurInput: function(event) {
		var element = $(event.target).closest('input');
		
		if ($(element).val() === '') {
			$(element).val($(element).attr('id').replace('_', ' '));
			if ($(element).attr('type', 'password')) {
				$(element).attr('type', 'text');
			}
		}
	},
	
	createUser: function(event) {
		event.preventDefault();
		
		var name = $(this.el).find('#User_Name').val(),
			email = $(this.el).find('#Email').val(),
			password = $(this.el).find('#Password').val(),
			confirm = $(this.el).find('#Confirm_Password').val();
		
		//start loading 'waiting for authentication'	
		this.attr.users.authenticateUser(name, email, password, confirm, 6);
	}
});