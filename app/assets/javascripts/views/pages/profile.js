Fauxble.Views.PagesProfile = Backbone.View.extend({
	
	template: JST['pages/profile'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.renderUserProfile();
			self.renderAchievables();
			self.renderMatchHistory();
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
		var view = new Fauxable.Views.AchievablesIndex({
			attr: this.attr,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#achievables').html(view.render().el);
	},
	
	renderMatchHistory: function() {
		var histories = this.attr.challenges.getMatchHistoryObj(this.user, this.attr.users),
			winner,
			loser;
		
		for (i = 0; i < histories.length; i++) {
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