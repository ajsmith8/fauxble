Fauxble.Collections.Tasks = Backbone.Collection.extend({
	
	model: Fauxble.Models.Task,
	url: 'tasks',
	
	createTask: function(question, challenge, user, answer_id, answer, score, time) {
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
		}
		
		return task;
	},
	
	getVersusScore: function(user, ids, challenge) {
		var score = 0;
		
		if (ids.length === 0) {
			
		}
	}
});
