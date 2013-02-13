Fauxble.Models.User = Backbone.Model.extend({
	
	incrementScore: function(element, time, score, amount) {
		var self = this,
			inter;
			
		if (amount > 0) {
			inter = setInterval(function() {
				$(element).html(score);
				score = score + 1;
				amount = amount - 1;
				if (amount <= 0) {
					clearInterval(inter);
				}
			}, time);
		}
	}
});
