Fauxble.Collections.Issues = Backbone.Collection.extend({
	
	model: Fauxble.Models.Issue,
	url: 'issues',
	
	getTopIssues: function(num) {
		var issues = _.toArray(this),
			top_issues = [];
		
		issues.sort(function(a, b) {
			return b.get('times_selected') - a.get('times_selected');
		});
		
		for (i = 0; i < num; i++) {
			top_issues.push(issues[i]);
		}
		
		return top_issues;
	}
});
