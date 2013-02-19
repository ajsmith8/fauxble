Fauxble.Collections.Challenges = Backbone.Collection.extend({
	
	model: Fauxble.Models.Challenge,
	url: 'challenges',
	
	initialize: function(models, options) {
		this.issues = options.issues;
		this.questions = options.questions;
		this.tasks = options.tasks;
	},
	
	setUserDefaults: function(user) {
		var issues = [],
			ids = '',
			self = this;
		
		this.issues.each(function(issue) {
			if (self.questions.getNumQuestions(issue) > 3) {
				issues.push(issue);
			}
		});
		
		issues = _.shuffle(issues);
		
		for (i = 0; i < 3; i++) {
			ids = this.questions.getRandomIds(issues[i], 4);
			this.create({
				challenger_id: 1,
				user_id: user.get('id'),
				issue_id: issues[i].get('id'),
				question_ids: ids
			}, {
				success: function(model, response) {
					self.tasks.createFauxTasks(model);
				},
				error: function(model, response) {
					//alert some junk
				}
			})
		}
	
		//get valid issues, then shuffle
		//create challenge, on success set task challenge_ids
		//randomize questions
		//create tasks
	},
	
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
	
	getWins: function(user1, user2, issue) {
		var wins = 0;
		
		if (issue) {
			wins = wins + this.where({
				user_id: user1.get('id'), 
				challenger_id: user2.get('id'), 
				winner_id: user1.get('id'), 
				issue_id: issue.get('id')
			}).length;
			wins = wins + this.where({
				user_id: user2.get('id'), 
				challenger_id: user1.get('id'), 
				winner_id: user1.get('id'),
				issue_id: issue.get('id')
			}).length;
		} else {
			wins = wins + this.where({user_id: user1.get('id'), challenger_id: user2.get('id'), winner_id: user1.get('id')}).length;
			wins = wins + this.where({user_id: user2.get('id'), challenger_id: user1.get('id'), winner_id: user1.get('id')}).length;
		}
		
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
	
	getMatchHistoryObj: function(user, users) {
		var self = this,
			array = [];
			
		users.each(function(u) {	
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