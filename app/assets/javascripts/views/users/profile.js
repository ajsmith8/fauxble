Fauxble.Views.UsersProfile = Backbone.View.extend({
	
	template: JST['users/profile'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.games = {
			played: this.attr.challenges.getTotalPlayed(this.user),
			won: this.attr.challenges.getTotalWon(this.user),
			lost: this.attr.challenges.getTotalLost(this.user)
		};
		this.global_rank = this.attr.ranks.getGlobalRank(this.attr.users, this.user);
	},
	
	render: function() {
		var self = this;
		$(this.el).addClass('user profile');
		$(this.el).html(this.template({
			user: this.user,
			games: this.games,
			rank: this.global_rank
		}));
		
		setTimeout(function() {
			self.renderGlobalRank();
		}, 0);
		
		return this;
	},
	
	renderGlobalRank: function() {
		var view = new Fauxble.Views.RanksGlobal({
			attr: this.attr,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#rank').html(view.render().el);
	}
});