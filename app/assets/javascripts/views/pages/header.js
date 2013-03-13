Fauxble.Views.PagesHeader = Backbone.View.extend({
	
	template: JST['pages/header'],
	
	events: {
		'click #home' : 'homePage',
		'click #about' : 'aboutPage',
		'click #signin' : 'toggleSignin',
		'click #fb_login' : 'fbLogin',
		'focus input' : 'focusInput',
		'blur input' : 'blurInput',
		'submit #signin_form' : 'signin'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			if (self.user) {
				self.renderProfile();
			}
		}, 0);
		
		return this;
	},
	
	renderProfile: function() {
		var view = new Fauxble.Views.UsersShow({
			attr: this.attr,
			user: this.user,
			is_sidebar: true
		});
		$(this.el).find('#profile').html(view.render().el);
	},
	
	toggleSignin: function() {
		var element = $(this.el).find('#signin_box');
		
		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
		} else {
			$(element).addClass('hide');
		}
	},
	
	fbLogin: function() {
		window.location = "http://localhost:3000/auth/facebook";
		//window.location = "http://salty-lowlands-9089.herokuapp.com/auth/facebook";
		//window.location = "http://fusegap.org/auth/facebook";	
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
	
	signin: function(event) {
		event.preventDefault();
		
		var name = $(this.el).find('#name').val(),
			password = $(this.el).find('#password').val(),
			user;
		
		//start loading 'waiting for authentication'
		// find user by name and use save to hit update in controller
		
		user = this.attr.users.where({name: name})[0];
		
		if (user) {
			if (user.authenticate(password)) {
				user.save({}, {
					success: function(model, response) {
						window.location.reload();
					},
					error: function(model, response) {
						window.location.reload();
					}
				});
			} else {
				alert('password incorrect');
			}
		} else {
			alert('no user found');
		}
		
	},
	
	homePage: function() {
		Backbone.history.navigate('', true);
	},
	
	aboutPage: function() {
		Backbone.history.navigate('about', true);
	}
});
//header