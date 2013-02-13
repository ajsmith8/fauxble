Fauxble.Models.Challenge = Backbone.Model.extend({
	
	setSentOrFinished: function(task) {
		if (task) {
			this.set({
				is_finished: true
			});
		} else {
			this.set({
				is_sent: true
			});
		}
		this.save();
	}
});
