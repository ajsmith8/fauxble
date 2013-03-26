Fauxble.Views.PagesNew = Backbone.View.extend({
	
	template: JST['pages/new'],
	
	events: {
		'click .user' : 'setChallengeUser',
		'click #fb_login' : 'fbLogin'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.subviews = [];
		
		this.attr.users.trigger('scope');
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.renderTopFusers();
			if (self.user.get('signed_in_fb')) {
				self.renderFacebook();
			}
		}, 0);
		
		return this;
	},
	
	renderTopFusers: function() {
		var users = this.attr.users.getActiveFusers(this.attr.challenges, this.user, 5);

		for (u = 0; u < users.length; u++) {
			this.appendUser(users[u].user, $(this.el).find('#active_fusers'), u);
		}
	},
	
	renderFacebook: function() {
		var view = new Fauxble.Views.UsersFacebook({
			attr: this.attr,
			user: this.user,
			challenge: this.challenge
		});
		this.subviews.push(view);
		$(this.el).find('#facebook').html(view.render().el);
	},
	
	appendUser: function(user, element, count) {
		var view = new Fauxble.Views.UsersShow({
			attr: this.attr,
			user: user,
			is_sidebar: false,
			count: count
		});
		this.subviews.push(view);
		$(element).append(view.render().el);
	},
	
	fbLogin: function() {
		window.location = "http://localhost:3000/auth/facebook";
		//window.location = "http://salty-lowlands-9089.herokuapp.com/auth/facebook";
		//window.location = "http://fusegap.org/auth/facebook";
	},
	
	setChallengeUser: function(event) {
		var user;
		
		if (!$(event.target).closest('.user').hasClass('friend')) {
			user = this.attr.users.get(parseInt($(event.target).closest('.user').attr('id')));

			this.challenge.set({
				user_id: user.get('id')
			});
			this.challenge.save();
			
			Backbone.history.navigate('issues' + this.challenge.get('id'), true);
		}
	},
	
	onClose: function() {
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});