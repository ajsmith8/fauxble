Fauxble.Collections.Challenges = Backbone.Collection.extend({
	
	model: Fauxble.Models.Challenge,
	url: 'challenges',
	
	createChallenge: function(user1, user2) {
		if (user2) {
			this.create({
				challenger_id: user1.get('id'),
				user_id: user2.get('id')
			}, {
				wait: true,
				success: function(model, response) {
					//stop loading
					Backbone.history.navigate('issues' + model.get('id'), true);
				},
				error: function(model, response) {
					//stop loading
					//alert error
				}
			});
		} else {
			this.create({
				challenger_id: user1.get('id')
			}, {
				wait: true,
				success: function(model, response) {
					//stop loading
					Backbone.history.navigate('new' + model.get('id'), true);
				},
				error: function(model, response) {
					//stop loading
					//alert error
				}
			});
		}
	},
	
	getWins: function(user1, user2) {
		var wins = 0;
		
		wins = wins + this.where({user_id: user1.get('id'), challenger_id: user2.get('id'), winner_id: user1.get('id')}).length;
		wins = wins + this.where({user_id: user2.get('id'), challenger_id: user1.get('id'), winner_id: user1.get('id')}).length;
		
		return wins;
	},
	
	getLosses: function(user1, user2) {
		var losses = 0;
		
		losses = losses + this.where({user_id: user1.get('id'), challenger_id: user2.get('id'), winner_id: user2.get('id')}).length;
		losses = losses + this.where({user_id: user2.get('id'), challenger_id: user1.get('id'), winner_id: user2.get('id')}).length;
		
		return losses;
	},
	
	getTotalPlayed: function(user) {
		var played = 0;
		
		played = played + this.where({user_id: user.get('id'), is_finished: true}).length;
		played = played + this.where({challenger_id: user.get('id'), is_finished: true}).length;
		
		return played;
	},
	
	getTotalWon: function(user) {
		var won = 0;
		
		won = won + this.where({user_id: user.get('id'), winner_id: user.get('id')}).length;
		won = won + this.where({challenger_id: user.get('id'), winner_id: user.get('id')}).length;
		
		return won;
	},
	
	getTotalLost: function(user) {
		var lost = 0;
		
		_.each(this.where({user_id: user.get('id'), is_finished: true}), function(challenge) {
			if (challenge.get('winner_id') !== user.get('id')) {
				lost = lost + 1;
			}
		});
		_.each(this.where({challenger_id: user.get('id'), is_finished: true}), function(challenge) {
			if (challenge.get('winner_id') !== user.get('id')) {
				lost = lost + 1;
			}
		});
		
		return lost;
	},
	
	getFactsLearned: function() {
		// not sure yet
	},
	
	getMatchHistoryObj: function(user, users) {
		var self = this,
			array = [];
			
		users = _.toArray(users);
		
		_.each(users, function(u) {
			if (
				self.where({user_id: u.get('id'), challenger_id: user.get('id'), is_finished: true}).length + 
				self.where({user_id: user.get('id'), challenger_id: u.get('id'), is_finished: true}).length > 0
			) {
				array.push({
					user: u,
					won: self.getWins(user, u),
					lost: self.getLosses(user, u)
				});
			}
		});
		
		array.sort(function(a, b) {
			return (b.won + b.lost) - (a.won + a.lost);
		});
		
		return array;
	}
});