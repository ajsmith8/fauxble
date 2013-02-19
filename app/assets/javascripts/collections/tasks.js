Fauxble.Collections.Tasks = Backbone.Collection.extend({
	
	model: Fauxble.Models.Task,
	url: 'tasks',
	
	initialize: function(models, options) {
		this.questions = options.questions;
		this.sliders = options.sliders;
		this.answers = options.answers;
	},
	
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
			if (self.where({user_id: user.get('id'), question_id: q.get('id')})[0]) {
				facts = facts + 1;
			}
		});
		
		return facts;
	},
	
	createFauxTasks: function(challenge) {
		var ids = challenge.get('question_ids').split('/'),
			answers, slider, time, score, answer_id,
			question, answer, id, total_score = 0;
		
		for (i = 0; i < ids.length; i++) {
			id = parseInt(ids[i]);
			question = this.questions.get(id);
			answers = this.answers.where({question_id: id});
			answers = _.shuffle(answers);
			slider = this.sliders.where({question_id: id})[0];
			time = Math.round(Math.random() * 15000);
			
			if (question.get('is_slider')) {
				answer_id = null;
				time = 0;
				
				if (slider.get('min') % 1 !== 0 || slider.get('correct') % 1 !== 0) {
					if (((slider.get('correct') % 1) * 10) % 1 === 0) {
						answer = Math.round(((Math.random() * (slider.get('max') - slider.get('min'))) + slider.get('min')) * 10) / 10;
					} else {
						answer = Math.round(((Math.random() * (slider.get('max') - slider.get('min'))) + slider.get('min')) * 100) / 100;
					}
				} else {
					answer = Math.round((Math.random() * (slider.get('max') - slider.get('min'))) + slider.get('min'));
				}
				
				if (slider.get('is_exponential')) {
					score = 100 - Math.round(
						(Math.abs(
							Math.pow(answer, (1 / 3)) - Math.pow(slider.get('correct'), (1 / 3))) / (Math.pow(slider.get('max'), (1 / 3)) - Math.pow(slider.get('min'), (1 / 3)))
						) * 100
					);
				} else {
					score = 100 - Math.round(Math.abs(answer - slider.get('correct')) / (slider.get('max') - slider.get('min')));
				}
			} else {
				answer = null;
				answer_id = answers[0].get('id');
				
				if (answers[0].get('is_correct')) {
					score = 100 - Math.round(time / 150);
				} else {
					score = 0;
				}
			}
			
			total_score = total_score + score;
			
			this.create({
				issue_id: question.get('issue_id'),
				question_id: id,
				challenge_id: challenge.get('id'),
				user_id: challenge.get('challenger_id'),
				answer_id: answer_id,
	          	answer: answer,
	           	score: score,
	           	time: time
			});
		}
		
		challenge.set({
			challenger_score: total_score,
			is_sent: true
		});
		challenge.save();
	}
});
