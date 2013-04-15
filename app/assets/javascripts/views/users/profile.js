Fauxble.Views.UsersProfile = Backbone.View.extend({
	
	template: JST['users/profile'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.rank = this.attr.ranks.where({issue_id: null, user_id: this.user.get('id')})[0];
		var facts = 0;
		if (this.rank) {
			facts = this.rank.get('facts');
		}
		this.games = {
			played: this.attr.challenges.getTotalPlayed(this.user),
			won: this.attr.challenges.getTotalWon(this.user),
			lost: this.attr.challenges.getTotalLost(this.user),
			facts: facts
		};
	},
	
	render: function() {
		$(this.el).addClass('user profile');
		$(this.el).html(this.template({
			user: this.user,
			games: this.games,
			rank: this.attr.users.getGlobalRank(this.user)
			//rank: this.attr.ranks.getRank(this.attr.users, this.user, null)
		}));
		
		return this;
	}
});