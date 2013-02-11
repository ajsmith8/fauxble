Fauxble.Views.ChallengesHistory = Backbone.View.extend({
	
	template: JST['challenges/history'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.winner = options.winner;
		this.loser = options.loser;
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			winner: this.winner,
			loser: this.loser
		}));
		
		setTimeout(function() {
			self.renderGlobalRank(self.winner.user, $(this.el).find('#winning').find('#rank'));
			self.renderGlobalRank(self.loser.user, $(this.el).find('#losing').find('#rank'));
		}, 0);
		
		return this;
	},
	
	renderGlobalRank: function(user, element) {
		var view = new Fauxble.Views.RanksGlobal({
			attr: this.attr,
			user: user
		});
		this.subviews.push(view);
		$(element).html(view.render().el);
	}
});
