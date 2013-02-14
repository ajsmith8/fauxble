Fauxble.Collections.Tasks = Backbone.Collection.extend({
	
	model: Fauxble.Models.Task,
	url: 'tasks',
	
	createTask: function(question, challenge, user, answer_id, answer, score, time, ranks) {
		var task = this.where({
			issue_id: question.get('issue_id'),
			question_id: question.get('id'),
			challenge_id: challenge.get('id'),
			user_id: user.get('id')
		})[0];
		
		if (!task) {
			task = this.create({
				issue_id: question.get('issue_id'),
				question_id: question.get('id'),
				challenge_id: challenge.get('id'),
				user_id: user.get('id'),
				answer_id: answer_id,
				answer: answer,
				score: score,
				time: time
			});
			
			ranks.createRank(user, challenge, score);
		}
		
		return task;
	},
	
	getVersusScore: function(user, ids, challenge) {
		var score = 0;
		
		if (ids.length > 1) {
			for (i = 0; i < ids.length - 1; i++) {
				if (this.where({challenge_id: challenge.get('id'), user_id: user.get('id'), question_id: ids[i]})[0]) {
					score = score + this.where({challenge_id: challenge.get('id'), user_id: user.get('id'), question_id: ids[i]})[0].get('score');	
				}
			}
		}
		
		return score;
	},
	
	getFactsLearned: function(user, questions) {
		var facts = 0,
			self = this;
		
		questions.each(function(q) {
			if (this.where({user_id: user.get('id'), question_id: q.get('id')})[0]) {
				facts = facts + 1;
			}
		});
		
		return facts;
	},
});
