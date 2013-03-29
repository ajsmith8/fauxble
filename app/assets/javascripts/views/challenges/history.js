Fauxble.Views.ChallengesHistory = Backbone.View.extend({
	
	template: JST['challenges/history'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.winner = options.winner;
		this.loser = options.loser;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).addClass('challenge history');
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
