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
	}
});
