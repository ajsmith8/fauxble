Fauxble.Collections.Sliders = Backbone.Collection.extend({
	
	model: Fauxble.Models.Slider,
	url: 'sliders',
	
	fetchSliders: function(ids) {
		this.fetch({
			data: {
				slider: {question_id: ids}
			},
			success: function(collection, response, options) {
				console.log('slider success');
			},
			error: function(collection, response, options) {
				console.log('slider error');
			}
		});
	}
});
