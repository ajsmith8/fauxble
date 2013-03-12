Fauxble.Models.Challenge = Backbone.Model.extend({
	
	setSentOrFinished: function(task) {
		var winner;
		
		if (task) {
			if (this.get('challenger_score') >= this.get('user_score')) {
				winner = this.get('challenger_id');
			} else {
				winner = this.get('user_id');
			}
			
			this.set({
				is_finished: true,
				winner_id: winner
			});
		} else {
			this.set({
				is_sent: true
			});
		}
		this.save();
	},
	
	randomUpdateWinner: function() {
		var self = this,
			winner_id;
		
		setTimeout(function() {
			if (self.get('challenger_score') >= self.get('user_score')) {
				winner_id = self.get('challenger_id');
			} else {
				winner_id = self.get('user_id');
			}

			self.set({
				is_sent: true,
				is_finished: true,
				winner_id: winner_id
			});
			self.save();
		}, Math.round(Math.random() * 60000));
	}
});
