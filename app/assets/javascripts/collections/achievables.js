Fauxble.Collections.Achievables = Backbone.Collection.extend({
	
	model: Fauxble.Models.Achievable,
	url: 'achievables',
	
	initialize: function(models, options) {
		this.tasks = options.tasks;
		this.challenges = options.challenges;
		this.issues = options.issues;
		this.users = options.users;
		this.user_achievables = options.user_achievables;
		
		this.tasks.on('add', this.checkTaskAchievable, this);
		this.challenges.on('change:winner_id', this.checkChallengeAchievable, this);
	},
	
	checkTaskAchievable: function(model) {
		var user = this.users.get(model.get('user_id'));
		
		this.learnedFacts(user);
	},
	
	checkChallengeAchievable: function(model) {
		var user = this.users.get(model.get('user_id')),
			challenger = this.users.get(model.get('challenger_id'));
			
		if (model.get('winner_id')) {
			if (user.get('id') === model.get('winner_id')) {
				this.wonGames(user);
				this.wonGamesStreak(user);
				this.lostGames(challenger);
				this.lostGamesStreak(challenger);
			} else {
				this.wonGames(challenger);
				this.wonGamesStreak(challenger);
				this.lostGames(user);
				this.lostGamesStreak(user);
			}
		}
	},
	
	learnedFacts: function(user) {
		var achievables = this.where({name: 'facts learned'}),
			achievable = null;
		
		for (a = 0; a < achievables.length; a++) {
			if (!this.user_achievables.hasEarned(user, achievables[a])) {
				achievable = achievables[a];
				break;
			}
		}
		
		if (achievable && achievable.get('count') <= this.tasks.getFactsLearned(user)) {
			this.user_achievables.createUserAchievable(user, achievable);
		}
	},
	
	lostGamesStreak: function(user) {
		var achievables = this.where({name: 'losses streak'}),
			achievable = null;
			
		for (a = 0; a < achievables.length; a++) {
			if (!this.user_achievables.hasEarned(user, achievables[a])) {
				achievable = achievables[a];
				break;
			}
		}
		
		if (achievable && achievable.get('count') <= this.challenges.getStreakLost(user)) {
			this.user_achievables.createUserAchievable(user, achievable);
		}
	},
	
	lostGames: function(user) {
		var achievables = this.where({name: 'losses'}),
			achievable = null;
			
		for (a = 0; a < achievables.length; a++) {
			if (!this.user_achievables.hasEarned(user, achievables[a])) {
				achievable = achievables[a];
				break;
			}
		}
		
		if (achievable && achievable.get('count') <= this.challenges.getTotalLost(user)) {
			this.user_achievables.createUserAchievable(user, achievable);
		}
	},
	
	wonGamesStreak: function(user) {
		var achievables = this.where({name: 'wins streak'}),
			achievable = null;
			
		for (a = 0; a < achievables.length; a++) {
			if (!this.user_achievables.hasEarned(user, achievables[a])) {
				achievable = achievables[a];
				break;
			}
		}
		
		if (achievable && achievable.get('count') <= this.challenges.getStreakWon(user)) {
			this.user_achievables.createUserAchievable(user, achievable);
		}
	},
	
	wonGames: function(user) {
		var achievables = this.where({name: 'wins'}),
			achievable = null;
			
		for (a = 0; a < achievables.length; a++) {
			if (!this.user_achievables.hasEarned(user, achievables[a])) {
				achievable = achievables[a];
				break;
			}
		}
		
		if (achievable && achievable.get('count') <= this.challenges.getTotalWon(user)) {
			this.user_achievables.createUserAchievable(user, achievable);
		}
	}
	// ***ACHIEVABLES FOR THIS VERSION***
	// learned 4 facts (answered 4 questions) 	-> check for this upon task creation
	// lost 3 games in a row					-> when challenge winner_id is set sort and check past 3 challenges	
	// lost 2 games								-> each time winner_id is set check total losses
	// won 2 games								-> each time winner_id is set check total wins
	// won 10 games								-> each time winner_id is set check total wins
	// won 5 games in a row						-> each time winner_id is set sort and check past 5 for wins
	
	
	// ***STUFF FOR LATER***
	// challenged 3 different opponents with 4+ stars
	// 5 questions right in a row
	// 20 questions right in a row
	// recieved 10 challenges
	// learned 20 facts
	// learned 50 facts
	// learned 100 facts
	// lost 10 questions in a row
	// lost 20 games
	// lost 50 games
	// lost 100 games
	// lost 5 games in a row then win 3 in a row
	// played 10 different issues
	// played all issues
	// played 20 games
	// played 50 games
	// played 100 games
	// played the same issue 5 times (in a row?)
	// sent 10 challenges
	// sent 5 challenges won 1 (of the 5?)
	// win 2 games in a row then lose 2 in a row
	// win 20 games
	// win 50 games
	// win 100 games
});
