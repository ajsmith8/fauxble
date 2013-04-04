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
		
		if (!this.where({user_id: user.get('id'), question_id: question.get('id')})[0]) {
			user.set({
				facts: user.get('facts') + 1
			});
			user.save();
		}
		
		if (!task) {
			this.create({
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
			
			return null;
		} else {
			return task;
		}
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
	
	getFactsLearned: function(user) {
		var facts = 0,
			self = this;
		
		this.questions.each(function(q) {
			if (self.where({user_id: user.get('id'), question_id: q.get('id')})[0]) {
				facts = facts + 1;
			}
		});
		
		return facts;
	},
	
	getIssueFactsAndUsers: function(issue) {
		var tasks = this.where({issue_id: issue.get('id')}),
			ids = [];
		
		for (var t = tasks.length; t > 0; t--) {
			var task = tasks[t - 1];
			
			if (ids.indexOf(task.get('user_id') + '/' + task.get('question_id')) === -1) {
				ids.push(task.get('user_id') + '/' + task.get('question_id'));
			}
		}
		
		return ids;
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
			time = Math.round(Math.random() * 150) * 100;
			
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
					score = Math.round(time / 150);
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
	},
	
	getRecents: function(question, num) {
		var tasks = this.where({question_id: question.get('id')}),
			recents = [],
			length = num;
		
		if (tasks.length < length) {
			length = tasks.length;
		}
		
		tasks.sort(function(a, b) {
			return a.get('created_at') - b.get('created_at');
		});
		
		for (t = 0; t < length; t++) {
			recents.push(tasks[t]);
		}
		
		return recents;
	},
	
	getUsers: function(users, issue) {
		var self = this,
			array = [];
		
		users.each(function(user) {
			if (self.where({user_id: user.get('id'), issue_id: issue.get('id')})[0]) {
				if (user.get('uid')) {
					array.push(user);
				}
			}
		});
		
		return array;
	},
	
	createRandomTask: function(challenge, question, user) {
		var slider, answers, answer, answer_id, score, time;
		
		if (question.get('is_slider')) {
			slider = this.sliders.where({question_id: question.get('id')})[0];
			answer_id = null;
			time = 0;
			answer = slider.getRandomAnswer();
			score = slider.getScoreFromAnswer(answer);
		} else {
			answers = _.shuffle(this.answers.where({question_id: question.get('id')}));
			answer = null;
			time = Math.round(Math.random() * 150) * 100;
			answer_id = answers[0].get('id');
			
			if (answers[0].get('is_correct')) {
				score = Math.round(time / 150);
			} else {
				score = 0;
			}
		}
		
		this.create({
			issue_id: question.get('issue_id'),
			question_id: question.get('id'),
			challenge_id: challenge.get('id'),
			user_id: user.get('id'),
			answer_id: answer_id,
          	answer: answer,
           	score: score,
           	time: time
		});
		
		if (user.get('id') === challenge.get('challenger_id')) {
			challenge.set({
				challenger_score: challenge.get('challenger_score') + score
			});
		} else {
			challenge.set({
				user_score: challenge.get('user_score') + score
			});
		}
		challenge.save();
	},
	
	setRandoms: function(challenge, challenger, user) {
		var ids = challenge.get('question_ids').split('/'),
			self = this;

		_.each(ids, function(id) {
			self.createRandomTask(challenge, self.questions.get(parseInt(id)), challenger);
			self.createRandomTask(challenge, self.questions.get(parseInt(id)), user);
		});
		
		challenge.randomUpdateWinner();
	}
});