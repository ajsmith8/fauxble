Fauxble.Views.IssuesChallenge = Backbone.View.extend({
	
	template: JST['issues/challenge'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.num_questions = this.attr.questions.getNumQuestions(this.issue);
	},
	
	render: function() {
		$(this.el).addClass('issue challenge');
		$(this.el).html(this.template({
			issue: this.issue,
			num_questions: this.num_questions
		}));
		return this;
	}
});