Fauxble.Views.PagesHome = Backbone.View.extend({
	
	template: JST['pages/home'],
	
	events: {
		'click #fb_login' : 'fbLogin',
		'click #email_signup' : 'toggleForm',
		'focus input' : 'focusInput',
		'blur input' : 'blurInput',
		'submit #signup' : 'createUser'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		
		this.attr.users.trigger('scope', {is_global: true, is_question: false});
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	fbLogin: function() {
		window.location = "http://localhost:3000/auth/facebook";
		//window.location = "http://salty-lowlands-9089.herokuapp.com/auth/facebook";
		//window.location = "http://fusegap.org/auth/facebook";	
	},
	
	toggleForm: function() {
		var element = $(this.el).find('#signup_form');
		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
		} else {
			$(element).addClass('hide');
		}
	},
	
	focusInput: function(event) {
		var element = $(event.target).closest('input');
		
		if ($(element).attr('id') === 'name') {
			if ($(element).val() === 'Name') {
				$(element).val('');
			}
		} else {
			if ($(element).attr('type') !== 'password') {
				$(element).val('');
				$(element).attr('type', 'password');
			}
		}
	},
	
	blurInput: function(event) {
		var element = $(event.target).closest('input');
		
		if ($(element).attr('id') === 'name') {
			if ($(element).val() === '') {
				$(element).val('Name');
			}
		} else {
			if ($(element).val() === '') {
				$(element).val($(element).attr('id'));
				$(element).attr('type', 'text');
			}	
		}
	},
	
	createUser: function(event) {
		event.preventDefault();
		
		var name = $('#name').val(),
			email = $('#email').val(),
			password = $('#password').val(),
			confirm = $('#confirm').val();
		
		//start loading 'waiting for authentication'	
		this.attr.users.authenticateUser(name, email, password, confirm, 6);
	}
});