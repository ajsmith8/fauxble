Fauxble.Views.PagesSignin = Backbone.View.extend({
	
	template: JST['pages/signin'],
	
	events: {
		'focus input' : 'focusInput',
		'blur input' : 'blurInput',
		'click #login_fb' : 'fbLogin'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.renderSignin();
		}, 0);
		
		return this;
	},
	
	renderSignin: function() {
		var view = new Fauxble.Views.UsersSignin({
			attr: this.attr,
			view: this
		});
		$(this.el).find('#signup_signin').html(view.render().el);
	},
	
	renderSignup: function() {
		var view = new Fauxble.Views.UsersSignup({
			attr: this.attr,
			view: this
		});
		$(this.el).find('#signup_signin').html(view.render().el);
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
	
	fbLogin: function() {
		//window.location = "http://localhost:3000/auth/facebook";
		//window.location = "http://salty-lowlands-9089.herokuapp.com/auth/facebook";
		window.location = "http://fusegap.org/auth/facebook";		
	}
});
// fb login
// account creation