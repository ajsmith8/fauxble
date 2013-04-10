Fauxble.Views.PagesProfile = Backbone.View.extend({
	
	template: JST['pages/profile'],
	
	events: {
		'click #share' : 'fbShare'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.current_user = false;
		
		if (this.user.get('id') === this.attr.current_user.get('id')) {
			this.current_user = true;
		}
		
		this.subviews = [];
		
		this.attr.users.trigger('scope');
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			name: this.user.get('name'),
			current_user: this.current_user
		}));
		
		setTimeout(function() {
			self.renderUserProfile();
			self.renderAchievables();
			self.renderMatchHistory();
			self.renderFeed();
		}, 0);
		
		return this;
	},
	
	renderUserProfile: function() {
		var view = new Fauxble.Views.UsersProfile({
			attr: this.attr,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#user').html(view.render().el);
	},
	
	renderAchievables: function() {
		var view = new Fauxble.Views.AchievablesIndex({
			attr: this.attr,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#achievables').html(view.render().el);
	},
	
	renderFeed: function() {
		var view = new Fauxble.Views.UsersFeed({
			attr: this.attr,
			user: this.user,
			profile: true,
		});
		$(this.el).find('#feed').html(view.render().el);
	},
	
	renderMatchHistory: function() {
		var histories = this.attr.challenges.getMatchHistoryObj(this.user, this.attr.users),
			winner,
			loser;
		
		for (var i = 0, len = histories.length; i < len; i++) {
			if (histories[i].won >= histories[i].lost) {
				winner = {
					user: this.user,
					wins: histories[i].won
				};
				loser = {
					user: histories[i].user,
					wins: histories[i].lost
				}
			} else {
				loser = {
					user: this.user,
					wins: histories[i].won
				};
				winner = {
					user: histories[i].user,
					wins: histories[i].lost
				}
			}
			this.appendMatchHistory(winner, loser);
		}
	},
	
	appendMatchHistory: function(winner, loser) {
		var view = new Fauxble.Views.ChallengesHistory({
			attr: this.attr,
			winner: winner,
			loser: loser
		});
		this.subviews.push(view);
		$(this.el).find('#history').append(view.render().el);
	},
	
	fbShare: function() {
		var user = this.user;
		
		gaEvent('Share', 'Profile', 'Clicked', null);
		
		if (user && !!user.get('uid')) {
			var obj = { 
				method: 'feed', 
				link: 'http://fusegap.org/#' + Backbone.history.getFragment(), 
				name: 'fuseGap', 
				to: user.get('uid'),
				picture: 'http://s3.amazonaws.com/fusegap/logos/blue_70.png',
				description: 'Check out my facts profile at fuseGap.org!'
			};
			function callback(response) 
			{
				if (response) {
					gaEvent('Share', 'Profile', String(user.get('id')), null);
					window.Fauxble.router.thanksPopup();
				} else {
					//close
				}
	        }
			FB.ui(obj, callback);
		} else {
			window.Fauxble.router.fbSignInPopup();
		}
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