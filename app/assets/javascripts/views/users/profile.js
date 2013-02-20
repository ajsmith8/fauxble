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
			lost: this.attr.challenges.getTotalLost(this.user),
			facts: this.attr.tasks.getFactsLearned(this.user)
		};
	},
	
	render: function() {
		$(this.el).addClass('user profile');
		$(this.el).html(this.template({
			user: this.user,
			games: this.games,
			rank: this.attr.ranks.getRank(this.attr.users, this.user, null)
		}));
		
		return this;
	}
});