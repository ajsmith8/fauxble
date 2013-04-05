Fauxble.Models.Question = Backbone.Model.extend({
	
	show: function(challenge) {
		Backbone.history.navigate('question' + challenge.get('id') + '/' + this.get('url'), true);
	}
});
