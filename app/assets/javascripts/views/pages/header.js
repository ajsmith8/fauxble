Fauxble.Views.PagesHeader = Backbone.View.extend({
	
	template: JST['pages/header'],
	
	events: {
		'click #home' 	: 'homePage',
		'click #about' 	: 'aboutPage',
		'click #mfc' 	: 'mfcPage',
		'click #signin' : 'toggleSignin',
		'click #fb_login_header' : 'fbLogin',
		'focus input' 	: 'focusInput',
		'blur input' 	: 'blurInput',
		'submit #signin_form' : 'signin',
		'click #issues' 	: 'issuePreview',
		'click .triangle_container' : 'toggleSignout',
		'click #signout' : 'signout'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		//used to handle cleaning up the view with the onClose function
		//same concept that was in the router
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		// $(this.el) is the element for the view,
		// also the source of some of those "ghost"
		// divs you were always seeing because unlike this 
		// instance, I don't usually assign a class or id
		// to them
		$(this.el).addClass('wrapper');
		// puts the template in the element of this view
		$(this.el).html(this.template({
			user: this.user
		}));
		
		// Not sure if this is the only way to do it, but it's worked and
		// I haven't found anything else that has
		// The setTimeout means everything in it becomes async so even though
		// the timeout time is 0, it needs to be async becuase if you do it before
		// the return this; the elements that the profile or signIn get rendered in
		// will not exist 
		setTimeout(function() {
			// the scope of this changes in setTimeout
			// that is why you need to assign it to a variable
			if (self.user) {
				$(self.el).find('#profile').addClass('black');
				self.renderProfile();
			} else {
				$(self.el).find('#profile').addClass('blue');
				self.renderSignIn();
			}
		}, 0);
		
		// a view's render function or it equivalent has to always return this
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
		// this is one of those functions I defined in the fauxble.js
		// since I had used the javascript syntax: function fbLogin() {}
		// instead of the Backbone syntax fbLogin: function() {}
		// you can use it in any javascript file like I have it below
		// if I had used the backbone syntax I would have to call it like:
		// this.fbLogin(); where this would be whatever view, collection, model, or router 
		// the function was defined in
		fbLogin();
	},
	
	focusInput: function(event) {
		// any sort of action the user takes has an event 
		// object
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