Fauxble.Models.Issue = Backbone.Model.extend({
	
	show: function() {
		Backbone.history.navigate('issue/' + this.get('url'), true);
	}
});
