Fauxble.Views.PagesHeader = Backbone.View.extend({
	
	template: JST['pages/header'],
	
	events: {
		'click #home' : 'homePage',
		'click #about' : 'aboutPage',
		'click #mfc' : 'mfcPage',
		'click #signin' : 'toggleSignin',
		'click #fb_login_header' : 'fbLogin',
		'focus input' : 'focusInput',
		'blur input' : 'blurInput',
		'submit #signin_form' : 'signin',
		'click #issues' : 'issuePreview',
		'click .triangle_container' : 'toggleSignout',
		'click #signout' : 'signout'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		
		$(this.el).addClass('wrapper');
		$(this.el).html(this.template({
			user: this.user
		}));
		
		setTimeout(function() {
			if (self.user) {
				$(self.el).find('#profile').addClass('black');
				self.renderProfile();
			} else {
				$(self.el).find('#profile').addClass('blue');
				self.renderSignIn();
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
		this.subviews.push(view);
		$(this.el).find('#profile').html(view.render().el);
	},
	
	renderSignIn: function() {
		var view = new Fauxble.Views.PagesSignin({
			attr: this.attr
		});
		this.subviews.push(view);
		$(this.el).find('#profile').html(view.render().el);
	},
	
	toggleSignin: function() {
		var element = $(this.el).find('.signin.panel'),
			button = $(this.el).find('#profile');

		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
			$(button).addClass('active');
		} else {
			$(element).addClass('hide');
			$(button).removeClass('active');
		}
	},
	
	hideSignin: function() {
		var element = $(this.el).find('.signin.panel'),
			button = $(this.el).find('#profile');
			
		$(element).addClass('hide');
		$(button).removeClass('active');
	},
	
	fbLogin: function() {
		gaEvent('Login', 'Facebook', 'Header', null);
		fbLogin();
	},
	
	focusInput: function(event) {
		var element = $(event.target).closest('input');
		
		if ($(element).attr('type') !== 'submit') {
			if ($(element).attr('id') === 'Email') {
				if ($(element).val() === 'Email') {
					$(element).val('');
				}
			} else {
				if ($(element).attr('type') !== 'password') {
					$(element).val('');
					$(element).attr('type', 'password');
				}
			}
		}
	},
	
	blurInput: function(event) {
		var element = $(event.target).closest('input');
		
		if ($(element).attr('type') !== 'submit') {
			if ($(element).attr('id') === 'Email') {
				if ($(element).val() === '') {
					$(element).val('Email');
				}
			} else {
				if ($(element).val() === '') {
					$(element).val($(element).attr('id'));
					$(element).attr('type', 'text');
				}	
			}
		}
	},
	
	signin: function(event) {
		event.preventDefault();
		
		var email = $(this.el).find('#Email').val(),
			password = $(this.el).find('#Password').val(),
			user;
		
		//start loading 'waiting for authentication'
		// find user by name and use save to hit update in controller
		
		user = this.attr.users.where({encrypted_email: email})[0];
		
		if (user) {
			if (user.authenticate(password)) {
				gaEvent('Login', 'Email', 'Header', null);
				user.save({}, {
					success: function(model, response) {
						Backbone.history.navigate('', false);
						window.location.reload();
					},
					error: function(model, response) {
						Backbone.history.navigate('', false);
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
		if (this.user) {
			Backbone.history.navigate('challenges', true);
		} else {
			Backbone.history.navigate('', true);
		}
	},
	
	aboutPage: function() {
		Backbone.history.navigate('about', true);
	},
	
	mfcPage: function() {
		this.hideSignin();
		Backbone.history.navigate('million-fact-challenge', true);
	},
	
	issuePreview: function() {
		Backbone.history.navigate('issues', true);
	},
	
	toggleSignout: function() {
		var element = $(this.el).find('#signout');
		
		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
		} else {
			$(element).addClass('hide');
		}
	},
	
	signout: function() {
		signout();
	},
	
	onClose: function() {
		var views = this.subviews;
		
		for (var v = views.length; v > 0; v--) {
			var view = views[v - 1];
			
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		}
	}
});