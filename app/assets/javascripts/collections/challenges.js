Fauxble.Collections.Challenges = Backbone.Collection.extend({
	
	model: Fauxble.Models.Challenge,
	url: 'challenges',
	
	initialize: function(models) {
		window.challenges_loaded = false;
		
		this.issues = Fauxble.issues;
		this.questions = Fauxble.questions;
		this.tasks = Fauxble.tasks;
	},
	
	fetchChallenges: function(user, callback) {
		this.fetch({
			data: {
				challenge: {user_id: user.get('id'), is_finished: 't'}
			},
			remove: false,
			silent: true
		});
		
		this.fetch({
			data: {
				challenge: {challenger_id: user.get('id'), is_finished: 't'}
			},
			remove: false,
			success: function(collection, response, options) {
				if (callback) {
					callback();
				}
			}
		});
	},
	
	setUserDefaults: function(user) {
		var issues = this.issues.availableIssues(this.questions, 3),
			ids = '',
			self = this;
		
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
				user_id: user2.get('id'),
				is_sent: false,
				is_finished: false
			}, {
				success: function(model, response) {
					//stop loading
					Backbone.history.navigate('issue' + model.get('id') + '/select', true);
				},
				error: function(model, response) {
					//stop loading
					//alert error
				}
			});
		} else {
			this.create({
				challenger_id: user1.get('id'),
				is_sent: false,
				is_finished: false
			}, {
				success: function(model, response) {
					//stop loading
					Backbone.history.navigate('user' + model.get('id') + '/select', true);
				},
				error: function(model, response) {
					//stop loading
					//alert error
				}
			});
		}
	},
	
	getChallenges: function(user, is_finished, is_sent) {
		if (is_finished) {
			return this.where({challenger_id: user.get('id'), is_finished: true}).concat(this.where({user_id: user.get('id'), is_finished: true}));
		} else {
			if (is_sent) {
				return this.where({challenger_id: user.get('id'), is_finished: false, is_sent: true});
			} else {
				return this.where({user_id: user.get('id'), is_finished: false, is_sent: true});
			}
		}
	},
	
	getWins: function(user1, user2) {
		var challenges = this.getChallengePairs(user1.get('id'), user2.get('id')),
			wins = 0;
			
		for (c = 0; c < challenges.length; c++) {
			if (user1.get('id') === challenges[c].get('winner_id')) {
				wins = wins + 1;
			}
		}	
		
		return wins;
	},
	
	getLosses: function(user1, user2) {
		var challenges = this.getChallengePairs(user1.get('id'), user2.get('id')),
			losses = 0;
		
		for (c = 0; c < challenges.length; c++) {
			if (user1.get('id') !== challenges[c].get('winner_id')) {
				losses = losses + 1;
			}
		}
		
		return losses;
	},
	
	getTotalPlayed: function(user) {
		return this.getChallenges(user, true, null).length;
	},
	
	getTotalWon: function(user) {
		var challenges = this.getChallenges(user, true, null),
			won = 0;
		
		for (c = 0; c < challenges.length; c++) {
			if (challenges[c].get('winner_id') === user.get('id')) {
				won = won + 1;
			}
		}
		
		return won;
	},
	
	getStreakWon: function(user) {
		var challenges = this.getChallenges(user, true, null),
			won = 0;
		
		challenges.sort(function(a, b) {
			return b.get('updated_at') - a.get('updated_at');
		});
		
		for (c = 0; c < challenges.length; c++) {
			if (challenges[c].get('winner_id') === user.get('id')) {
				won = won + 1;
			} else {
				break;
			}
		}
		
		return won;
	},
	
	getTotalLost: function(user) {
		var challenges = this.getChallenges(user, true, null),
			lost = 0;
		
		for (c = 0; c < challenges.length; c++) {
			if (challenges[c].get('winner_id') !== user.get('id')) {
				lost = lost + 1;
			}
		}
		
		return lost;
	},
	
	getStreakLost: function(user) {
		var challenges = this.getChallenges(user, true, null),
			lost = 0;
		
		challenges.sort(function(a, b) {
			return b.get('updated_at') - a.get('updated_at');
		});
		
		for (c = 0; c < challenges.length; c++) {
			if (challenges[c].get('winner_id') !== user.get('id')) {
				lost = lost + 1;
			} else {
				break;
			}
		}
		
		return lost;
	},
	
	getChallengePairs: function(id1, id2) {
		return this.where({user_id: id1, challenger_id: id2, is_finished: true}).concat(this.where({user_id: id2, challenger_id: id1, is_finished: true}));
	},
	
	getMatchHistoryObj: function(user, users) {
		var self = this,
			challenges = this.getChallenges(user, true, null),
			ids = [],
			array = [],
			rival,
			id;
		
		for (c = 0; c < challenges.length; c++) {
			if (challenges[c].get('challenger_id') === user.get('id')) {
				id = challenges[c].get('user_id');
			} else {
				id = challenges[c].get('challenger_id');
			}
			
			if (ids.indexOf(id) === -1) {
				ids.push(id);
			}
		}
		
		for (i = 0; i < ids.length; i++) {
			rival = users.get(ids[i]);
			
			array.push({
				user: rival,
				won: this.getWins(user, rival),
				lost: this.getLosses(user, rival)
			});
		}
		
		array.sort(function(a, b) {
			return (b.won + b.lost) - (a.won + a.lost);
		});
		
		return array;
	}
});