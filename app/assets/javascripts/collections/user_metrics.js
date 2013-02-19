Fauxble.Collections.UserMetrics = Backbone.Collection.extend({
	
	model: Fauxble.Models.UserMetric,
	url: 'user_metrics',
	
	initialize: function(models, options) {
		this.challenges = options.challenges;
		this.users = options.users;

		//this.challenges.on('add', this.challengeCreated, this);
		//this.challenges.on('change:is_finished', this.challengeFinished, this);
		//this.challenges.on('change:is_sent', this.challengeSent, this);
		//this.users.on('page', this.addTime, this);
	},
	
	getUserMetric: function(user) {
		if (this.where({user_id: user.get('id')})[0]) {
			return this.where({user_id: user.get('id')})[0];
		} else {
			return this.create({user_id: user.get('id'), user_name: user.get('name')});
		}
	},
	
	getUsersChallenged: function(user) {
		var num = 0,
			self = this;
		
		this.users.each(function(u) {
			if (self.challenges.where({challenger_id: user.get('id'), user_id: u.get('id')})[0]) {
				num = num + 1;
			}
		});
		
		return num;
	},
	
	getChallengedUsers: function(user) {
		var num = 0,
			self = this;
		
		this.users.each(function(u) {
			if (self.challenges.where({user_id: user.get('id'), challenger_id: u.get('id')})[0]) {
				num = num + 1;
			}
		});
		
		return num;
	},
	
	challengeCreated: function(challenge) {
		var user = this.users.get(challenge.get('challenger_id')),
			metric = this.getUserMetric(user);
		
		metric.set({
			challenges_created: metric.get('challenges_created') + 1,
			num_users_challenged: this.getUsersChallenged(user)
		});
		metric.save();
	},
	
	challengeFinished: function(challenge) {
		if (challenge.get('is_finished')) {
			var challenger_metric = this.getUserMetric(this.users.get(challenge.get('challenger_id'))),
				user_metric = this.getUserMetric(this.users.get(challenge.get('user_id')));
			
			challenger_metric.set({
				challenges_finished: challenger_metric.get('challenges_finished') + 1
			});
			user_metric.set({
				challenges_finished: user_metric.get('challenges_finished') + 1,
				complete_replies: user_metric.get('complete_replies') + 1
			});
			challenger_metric.save();
			user_metric.save();
		}
	},
	
	ChallengeSent: function(challenge) {
		if (challenge.get('is_sent')) {
			var user = this.users.get(challenge.get('user_id')),
				challenger_metric = this.getUserMetric(this.users.get(challenge.get('challenger_id'))),
				user_metric = this.getUserMetric(user);
			
			challenger_metric.set({
				challenges_sent: challenger_metric.get('sent') + 1
			});
			user_metric.set({
				challenges_recieved: user_metric.get('challenges_recieved') + 1,
				num_challenged_users: this.getChallengedUsers(user)
			});
			challenger_metric.save();
			user_metric.save();
		}
	},
	
	addTime: function(options) {
		var user = options.user,
			time = options.time,
			metric = this.getUserMetric(user);
		
		metric.set({
			time_on_site: metric.get('time_on_site') + time
		});
		metric.save();
	}
});