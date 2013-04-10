Fauxble.Collections.Events = Backbone.Collection.extend({
	
	model: Fauxble.Models.Event,
	url: 'events',
	
	initialize: function(models, options) {
		this.challenges = options.challenges;
		this.user_achievables = options.user_achievables;
		this.users = options.users;
		
		this.user_achievables.on('add', this.achievable, this);
		this.users.on('change:signed_on', this.user, this);
		this.users.on('change:signed_on_fb', this.user, this);
		this.challenges.on('change:is_sent', this.challenge, this);
	},
	
	achievable: function(model) {
		var self = this;
		
		this.create({
			kind: 'achievable',
			model_id: model.get('id')
		}, {
			success: function(model, response) {
				self.trigger('stuff');
			},
			error: function(model, response) {
				
			}
		});
	},
	
	challenge: function(model) {
		var self = this;
		
		this.create({
			kind: 'challenge',
			model_id: model.get('id')
		}, {
			success: function(model, response) {
				self.trigger('stuff');
			},
			error: function(model, response) {
				
			}
		});
	},
	
	user: function(model) {
		var self = this;
		
		this.create({
			kind: 'user',
			model_id: model.get('id')
		}, {
			success: function(model, response) {
				self.trigger('stuff');
			},
			error: function(model, response) {
				
			}
		});
	}
});
