Fauxble.Collections.Issues = Backbone.Collection.extend({
	
	model: Fauxble.Models.Issue,
	url: 'issues',
	
	getTopIssues: function(num) {
		var issues = this.toArray(),
			top_issues = [];
		
		issues.sort(function(a, b) {
			return b.get('times_selected') - a.get('times_selected');
		});
		
		for (i = 0; i < num; i++) {
			top_issues.push(issues[i]);
		}
		
		return top_issues;
	},
	
	availableIssues: function(questions, num) {
		var issues = this.toArray(),
			available = [];
		
		for (i = 0; i < issues.length; i++) {
			if (questions.getNumQuestions(issues[i]) > num - 1) {
				available.push(issues[i]);
			}
		}

		return available;
	}
});
