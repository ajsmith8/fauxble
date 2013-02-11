Fauxble.Views.UsersResult = Backbone.View.extend({
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.question = options.question;
		this.user = options.user;
		this.is_right = options.is_right;
		this.task = this.attr.tasks.where({
			challenge_id: this.challenge.get('id'),
			issue_id: this.question.get('issue_id'),
			question_id: this.question.get('id'),
			user_id: this.user.get('id')
		})[0];
		
		if (this.is_right) {
			this.template = JST['users/result_right'];
		} else {
			this.template = JST['users/result_left'];			
		}
	},
	
	render: function() {
		$(this.el).addClass('user result');
		if (this.is_right) {
			$(this.el).addClass('right');
		} else {
			$(this.el).addClass('left');
		}
		$(this.el).html(this.template({
			user: this.user,
			score: this.getScore(),
			answer: this.getAnswer()
		}));
		return this;
	},
	
	getScore: function() {
		if (this.task) {
			return this.task.get('score');
		} else {
			return 'waiting...';
		}
	},
	
	getAnswer: function() {
		var slider = this.sliders.where({question_id: this.question.get('id')})[0];
			answer;
		
		if (this.task) {
			if (this.task.get('answer')) {
				answer = this.task.get('answer');
				if (answer % 1 !== 0) {
					return slider.addUnits(String(answer)); 
				} else {
					return slider.addUnits(slider.addCommas(answer));
				}
			} else {
				return this.attr.answers.get(this.task.get('answer_id')).get('title');
			}
		} else {
			return 'waiting...'
		}
	}
})