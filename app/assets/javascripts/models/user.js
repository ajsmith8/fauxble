Fauxble.Models.User = Backbone.Model.extend({
	
	incrementScore: function(element, time, score, amount) {
		var self = this,
			inter;
			
		if (amount > 0) {
			inter = setInterval(function() {
				if (amount <= 0) {
					clearInterval(inter);
				}
				$(element).html(score);
				score = score + 1;
				amount = amount - 1;
			}, time);
		}
	},
	
	authenticate: function(string) {
		return sha256_digest(this.get('password_salt') + '--' + string) === this.get('encrypted_password');
	},
	
	signedIn: function() {
		return this.get('signed_in') || this.get('signed_in_fb');
	},
	
	show: function() {
		Backbone.history.navigate('user/' + this.get('url'), true);
	}
});
