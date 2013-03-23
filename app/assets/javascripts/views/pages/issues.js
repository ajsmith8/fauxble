Fauxble.Views.PagesIssues = Backbone.View.extend({
	
	template: JST['pages/issues'],
	
	events: {
		'click #play' : 'setChallengeIssue',
		'click #shuffle' : 'renderIssues',
		'click #all' : 'showAllIssues'
	},
	
	initialize: function(options) {
		console.log('views/pages/issues init ' + window.timer);
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.issues = null;
		this.subviews = [];
		
		this.attr.users.trigger('scope');
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
		console.log('views/pages/issues/renderIssues init ' + window.timer); 
		var issues;
		
		if (!this.issues) {
			this.issues = this.attr.issues.availableIssues(this.attr.questions, 3);
		}
		
		issues = _.shuffle(this.issues);
		$(this.el).find('#issues').empty();
		
		for (i = 0; i < 4; i++) {
			this.appendIssue(issues[i], this.attr.questions.getNumQuestions(issues[i]), i);
		}
	},
	
	appendIssue: function(issue, num_questions, count) {
		console.log('views/pages/issues/appendIssue ' + issue.get('id') + ' init ' + window.timer);
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
	
	showAllIssues: function() {
		var self = this,
			num_questions,
			issues = this.attr.issues.availableIssues(this.attr.questions, 3);
		
		$(this.el).find('#issues').empty();
		
		for (i = 0; i < issues.length ; i++) {
			this.appendIssue(issues[i].issue, issues[i].facts, i);
		}
	},
	
	setChallengeIssue: function(event) {
		var issue = this.attr.issues.get(parseInt($(event.target).closest('.issue').attr('id')));
		
		this.challenge.set({
			issue_id: issue.get('id'),
			question_ids: this.attr.questions.getRandomIds(issue, 4)
		});
		this.challenge.save();
		console.log('views/pages/issues/setChallengeIssue route ' + window.timer);
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