Fauxble.Views.PagesIssues = Backbone.View.extend({
	
	template: JST['pages/issues'],
	
	events: {
		'click #play' : 'setChallengeIssue',
		'click #shuffle' : 'renderIssues',
		'click #all' : 'showAllIssues'
	},
	
	initialize: function(options) {
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
		var issues;
		
		if (!this.issues) {
			this.issues = this.attr.issues.availableIssues(3);
		}
		
		issues = _.shuffle(this.issues);
		$(this.el).find('#issues').empty();
		
		for (var i = 0; i < 4; i++) {
			console.log(i);
			this.appendIssue(issues[i], i);
		}
	},
	
	appendIssue: function(issue, count) {
		var view = new Fauxble.Views.IssuesShow({
			attr: this.attr,
			issue: issue,
			challenge: this.challenge,
			count: count
		});
		this.subviews.push(view);
		$(this.el).find('#issues').append(view.render().el);
	},
	
	showAllIssues: function() {
		var self = this,
			num_questions,
			issues = this.attr.issues.availableIssues(3);
		
		$(this.el).find('#issues').empty();
		
		for (var i = 0; i < issues.length ; i++) {
			this.appendIssue(issues[i].issue, issues[i].facts, i);
		}
	},
	
	setChallengeIssue: function(event) {
		var issue = this.attr.issues.get(parseInt($(event.target).closest('.issue').attr('id'))),
			ids = this.attr.questions.getRandomIds(issue, 4),
			question = this.attr.questions.get(parseInt(ids.split('/')[0]));
		
		this.challenge.set({
			issue_id: issue.get('id'),
			question_ids: ids
		});
		this.challenge.save();
		
		Backbone.history.navigate('question' + this.challenge.get('id') + '/' + question.get('url'), true);
	},
	
	onClose: function() {
		var views = this.subviews;
		
		for (var v = views.length; v > 0; v--) {
			var view = views[v - 1];
			
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		}
	}
});