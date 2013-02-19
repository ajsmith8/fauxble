Fauxble.Views.PagesIssues = Backbone.View.extend({
	
	template: JST['pages/issues'],
	
	events: {
		'click #play' : 'setChallengeIssue'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.renderIssues();
		}, 0);
		
		return this;
	},
	
	renderIssues: function() {
		var self = this,
			count = 0;
		this.attr.issues.each(function(issue) {
			num_questions = self.attr.questions.getNumQuestions(issue);
			if (num_questions > 3) {
				self.appendIssue(issue, num_questions, count);
				count = count + 1;
			}
		});
	},
	
	appendIssue: function(issue, num_questions, count) {
		var view = new Fauxble.Views.IssuesShow({
			attr: this.attr,
			issue: issue,
			challenge: this.challenge,
			num_questions: num_questions,
			count: count
		});
		this.subviews.push(view);
		$(this.el).find('#issues').append(view.render().el);
	},
	
	setChallengeIssue: function(event) {
		var issue = this.attr.issues.get(parseInt($(event.target).closest('.issue').attr('id')));
		
		this.challenge.set({
			issue_id: issue.get('id'),
			question_ids: this.attr.questions.getRandomIds(issue, 4)
		});
		this.challenge.save();
		
		Backbone.history.navigate(this.challenge.get('id') + '/question' + this.challenge.get('question_ids').split('/')[0], true);
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