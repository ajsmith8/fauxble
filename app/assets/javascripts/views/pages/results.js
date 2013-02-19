Fauxble.Views.PagesResults = Backbone.View.extend({
	
	template: JST['pages/results'],

	events: {
		'click #finish' : 'sendOrFinish'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.question_ids = this.challenge.get('question_ids').split('/');
		this.time = 1050;
		this.questions = [];
		this.subviews = [];
		for (i = 0; i < this.question_ids.length; i++) {
			this.questions.push(this.attr.questions.get(parseInt(this.question_ids[i])));
		}
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			is_finished: this.challenge.get('is_finished'),
			header: this.getHeaderText()
		}));
		
		setTimeout(function() {
			self.showResults();
		}, 0);
		
		return this;
	},
	
	renderResult: function(question) {
		var view = new Fauxble.Views.QuestionsResult({
			attr: this.attr,
			challenge: this.challenge,
			question: question
		});
		this.subviews.push(view);
		$(this.el).find('#results').append(view.render().el);
	},
	
	showResults: function() {
		var self = this,
			count = 0,
			inter;

		inter = setInterval(function() {
			self.renderResult(self.questions[count]);
			count = count + 1;
			if (count >= self.questions.length) {
				clearInterval(inter);
			}
		}, self.time);
		
		this.showButton(self.time * (this.questions.length + 1));
	},
	
	showButton: function(time) {
		var self = this;
		
		setTimeout(function() {
			$(self.el).find('#finish').removeClass('hide');
		}, time);
	},
	
	getHeaderText: function() {
		if (this.challenge.get('is_finished')) {
			if (this.challenge.get('winner_id') === this.challenge.get('user_id')) {
				return 'You Won!';
			} else {
				return 'You Lost...';
			}
		} else {
			return 'Waiting...';
		}
	},
	
	sendOrFinish: function() {
		if (this.challenge.get('is_finished')) {
			//start loading
			this.attr.challenges.createChallenge(
				this.attr.users.get(this.challenge.get('user_id')), 
				this.attr.users.get(this.challenge.get('challenger_id'))
			);
		} else {
			Backbone.history.navigate('', true);
		}
	},
	
	onClose: function() {
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});