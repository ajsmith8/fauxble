Fauxble.Views.PagesSignin = Backbone.View.extend({
	
	template: JST['pages/signin'],
	
	events: {
		'focus input' : 'focusInput',
		'blur input' : 'blurInput',
		'submit #new_user' : 'createUser',
		'click #login_fb' : 'fbLogin'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	focusInput: function(event) {
		var element = $(event.target).closest('input');
		
		if ($(element).attr('id') === 'user_name') {
			if ($(element).val() === 'user name') {
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
		
		if ($(element).attr('id') === 'user_name') {
			if ($(element).val() === '') {
				$(element).val('user name');
			}
		} else {
			if ($(element).val() === '') {
				$(element).val($(element).attr('id').replace('_', ' '));
				$(element).attr('type', 'text');
			}	
		}
	},
	
	createUser: function(event) {
		event.preventDefault();
		
		var name = $('#name').val(),
			password = $('#password').val(),
			confirm = $('#confirm_password').val();
		
		//start loading 'waiting for authentication'	
		if (this.attr.users.authenticateUser(name, password, confirm, 6)) {
			//stop loading
			//redirect to challenges
		} else {
			//stop loading
			//reset input fields
		}
	},
	
	fbLogin: function() {
		window.location = "http://localhost:3000/auth/facebook";
	}
});
// fb login
// account creation