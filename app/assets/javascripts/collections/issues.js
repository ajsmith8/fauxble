Fauxble.Collections.Issues = Backbone.Collection.extend({
	
	model: Fauxble.Models.Issue,
	url: 'issues',
	
	initialize: function(models) {
		window.issues_loaded = false;
		
		if (models.length > 0) {
			window.issues_loaded = true;
		}
	},
	
	fetchIssues: function(callback) {
		this.fetch({
			success: function(collection, response, options) {
				window.issues_loaded = true;
				callback();
			},
			error: function(collection, response, options) {
				
			}
		});
	},
	
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
	
	availableIssues: function(num) {
		var issues = this.toArray(),
			available = [];
		
		console.log(issues.length);
		for (var i = 0, len = issues.length; i < len; i++) {
			console.log('facts: ' + issues[i].get('facts'));
			if (issues[i].get('facts') > num - 1) {
				console.log('pushed');
				available.push(issues[i]);
			}
		}

		return available;
	}
});
