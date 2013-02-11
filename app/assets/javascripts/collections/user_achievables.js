Fauxble.Collections.UserAchievables = Backbone.Collection.extend({
	
	model: Fauxble.Models.UserAchievable,
	url: 'user_achievables',
	
	hasEarned: function(user, achievable) {
		if (this.where({user_id: user.get('id'), achievable_id: achievable.get('id')})[0]) {
			return true;
		} else {
			return false;
		}
	}
});
