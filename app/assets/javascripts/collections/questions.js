Fauxble.Collections.Questions = Backbone.Collection.extend({
	
	model: Fauxble.Models.Question,
	url: 'questions',
	
	initialize: function() {
		this.sliders = Fauxble.sliders;
		this.answers = Fauxble.answers;
		this.sources = Fauxble.sources;
		this.tasks = Fauxble.tasks;
	},
	
	fetchQuestions: function(ids, callback) {
		this.fetch({
			data: {
				question: {id: ids}
			},
			success: function(collection, response, options) {
				callback();
			},
			error: function(collection, response, options) {
				console.log('question error');
			}
		});
	},
	
	getNumQuestions: function(issue) {
		return issue.get('facts');
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
