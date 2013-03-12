Fauxble.Collections.Questions = Backbone.Collection.extend({
	
	model: Fauxble.Models.Question,
	url: 'questions',
	
	initialize: function(models, options) {
		this.sliders = options.sliders;
		this.answers = options.answers;
	},
	
	getNumQuestions: function(issue) {
		return this.where({issue_id: issue.get('id')}).length;
	},
	
	getRandomIds: function(issue, num) {
		var questions = this.where({issue_id: issue.get('id')}),
			ids;
		
		questions = _.shuffle(questions);
		
		ids = String(questions[0].get('id'));
		for (id = 1; id < num; id++) {
			ids = ids + '/' + questions[id].get('id');
		}
		
		return ids;
	}
});
