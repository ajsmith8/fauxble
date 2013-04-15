Fauxble.Models.Question = Backbone.Model.extend({
	
	show: function(challenge) {
		Fauxble.router.stopLoading();
		Backbone.history.navigate('question' + challenge.get('id') + '/' + this.get('url'), true);
	}
});
