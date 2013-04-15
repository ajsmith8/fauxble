Fauxble.Collections.Events = Backbone.Collection.extend({
	
	model: Fauxble.Models.Event,
	url: 'events',
	
	initialize: function() {
		this.challenges = Fauxble.challenges;
		this.user_achievables = Fauxble.user_achievables;
		this.users = Fauxble.users;
		
		this.user_achievables.on('feed', this.achievable, this);
		this.users.on('change:signed_on', this.user, this);
		this.users.on('change:signed_on_fb', this.user, this);
		this.challenges.on('change:is_sent', this.challenge, this);
	},
	
	fetchEvents: function(callback) {
		this.fetch({
			remove: false,
			success: function(collection, response, options) {
				callback();
			},
			error: function(collection, response, options) {
				console.log('event error');
			}
		});
	},
	
	fetchUserEvents: function(user) {
		this.fetch({
			data: {
				event: {kind: 'challenge', challenger_id: user.get('id')}
			},
			remove: false,
			success: function(collection, response, options) {
		
			},
			error: function(collection, response, options) {
				console.log('event error');
			}
		});
		
		this.fetch({
			data: {
				event: {kind: 'achievable', user_id: user.get('id')}
			},
			success: function(collection, response, options) {
		
			},
			error: function(collection, response, options) {
				console.log('event error');
			}
		});
		
		this.fetch({
			data: {
				event: {kind: 'user', user_id: user.get('id')}
			},
			success: function(collection, response, options) {
		
			},
			error: function(collection, response, options) {
				console.log('event error');
			}
		});
	},
	
	achievable: function(achievable) {
		var self = this;
		
		this.create({
			kind: 'achievable',
			model_id: achievable.get('id'),
			user_id: achievable.get('user_id'),
			challenger_id: null,
			issue_id: null,
			achievable_id: achievable.get('achievable_id')
		}, {
			success: function(model, response) {
				self.trigger('stuff', model);
			},
			error: function(model, response) {
				
			}
		});
	},
	
	challenge: function(challenge) {
		var self = this;
		console.log('bitches');
		this.create({
			kind: 'challenge',
			model_id: challenge.get('id'),
			user_id: challenge.get('user_id'),
			challenger_id: challenge.get('challenger_id'),
			issue_id: challenge.get('issue_id'),
			achievable_id: null
		}, {
			success: function(model, response) {
				self.trigger('stuff', model);
			},
			error: function(model, response) {
				
			}
		});
	},
	
	user: function(user) {
		var self = this;
		
		this.create({
			kind: 'user',
			model_id: user.get('id'),
			user_id: user.get('id'),
			challenger_id: null,
			issue_id: null,
			achievable_id: null
		}, {
			success: function(model, response) {
				self.trigger('stuff', model);
			},
			error: function(model, response) {
				
			}
		});
	}
});
