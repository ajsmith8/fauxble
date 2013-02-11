Fauxble.Views.PagesResults = Backbone.View.extend({
	
	template: JST['pages/results'],
	
	events: {
		'click #finish' : 'sendOrFinish'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.question_ids = this.challenge.get('question_ids').split('/');
		this.time = 500;
		for (i = 0; i < this.question_ids.length; i++) {
			this.questions.push(this.attr.questions.get(parseInt(this.question_ids[i])));
		}
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			is_finished: this.challenge.get('is_finished')
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
		$(this.el).find('#results').append(view.render().el);
	},
	
	showResults: function() {
		var self = this;
		
		for (q = 0; q < this.questions.length; q++) {
			setTimeout(function() {
				self.renderResult(self.questions[q]);
			}, self.time + (self.time * q));
		}
		
		this.showButton(self.time * (this.questions.length + 1));
	},
	
	showButton: function(time) {
		
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
	}
});