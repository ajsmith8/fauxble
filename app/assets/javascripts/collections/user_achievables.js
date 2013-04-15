Fauxble.Collections.UserAchievables = Backbone.Collection.extend({
	
	model: Fauxble.Models.UserAchievable,
	url: 'user_achievables',
	
	fetchUserAchievables: function(user, achievables, callback) {
		var params,
			ids = [];
		
		if (achievables) {
			for (var a = 0, len = achievables.length; a < len; a++) {
				ids.push(achievables[a].get('id'));
			}
			params = {user_achievable: {user_id: user.get('id'), achievable_id: ids}};
		} else {
			params = {user_achievable: {user_id: user.get('id')}};
		}
		this.fetch({
			data: params,
			remove: false,
			silent: true,
			success: function(collection, response, options) {
				console.log(collection);
				if (callback) {
					callback();
				}
			}, 
			error: function(collection, response, options) {
				console.log('user achievable error');
			}
		});
	},
	
	hasEarned: function(user, achievable) {
		if (this.where({user_id: user.get('id'), achievable_id: achievable.get('id')})[0]) {
			return true;
		} else {
			return false;
		}
	},
	
	createUserAchievable: function(user, achievable) {
		var self = this;
		
		this.create({
			user_id: user.get('id'),
			achievable_id: achievable.get('id')
		}, {
			success: function(model, response) {
				self.trigger('feed', model);
			},
			error: function(model, response) {
				
			}
		});
	}
});
