Fauxble.Collections.Sources = Backbone.Collection.extend({
	
	model: Fauxble.Models.Source,
	url: 'sources',
	
	fetchSources: function(ids) {
		this.fetch({
			data: {
				source: {question_id: ids}
			},
			success: function(collection, response, options) {
				console.log('source success');
			},
			error: function(collection, response, options) {
				console.log('source error');
			}
		});
	},
});
