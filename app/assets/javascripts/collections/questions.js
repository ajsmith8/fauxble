Fauxble.Collections.Questions = Backbone.Collection.extend({
	
	model: Fauxble.Models.Question,
	url: 'questions',
	
	getNumQuestions: function(issue) {
		return this.where({issue_id: issue.get('id')}).length;
	},
	
	getRandomIds: function(issue, num) {
		var questions = this.where({issue_id: issue.get('id')}),
			ids;
		
		questions = _.shuffle(questions);
		
		ids = String(questions[0].get('id'));
		for (i = 1; i < num; i++) {
			ids = ids + '/' + questions[i].get('id');
		}
		
		return ids;
	}
});
