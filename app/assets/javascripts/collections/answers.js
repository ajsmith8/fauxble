Fauxble.Collections.Answers = Backbone.Collection.extend({
	
	model: Fauxble.Models.Answer,
	url: 'answers',
	
	fetchAnswers: function(ids) {
		this.fetch({
			data: {
				answer: {question_id: ids}
			},
			success: function(collection, response, options) {
				console.log('answer success');
			},
			error: function(collection, response, options) {
				console.log('answer error');
			}
		});
	}
});
