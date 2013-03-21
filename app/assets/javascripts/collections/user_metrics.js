Fauxble.Collections.UserMetrics = Backbone.Collection.extend({
	
	model: Fauxble.Models.UserMetric,
	url: 'user_metrics',
	
	initialize: function(models, options) {
		this.challenges = options.challenges;
		this.users = options.users;
		
		this.challenges.on('add change:is_finished change:is_sent', this.getUserMetric, this);
		this.users.on('ans', this.mfcAnswer, this);
		this.users.on('page', this.addTime, this);
		this.users.on('change:signed_in change:signed_in_fb', this.checkSignedIn, this);
		this.users.on('continue', this.checkContinue, this);
		this.users.on('page', this.setSignedIn, this);
	},
	
	getUserMetric: function(challenge) {
		var challenger = this.users.get(challenge.get('challenger_id')),
			user = this.users.get(challenge.get('user_id')),
			challenger_metric = this.where({user_id: challenger.get('id')})[0],
			user_metric,
			self = this;
		
		if (challenger_metric) {
			this.updateMetric(challenger_metric, challenger, challenge);
		} else {
			this.create({
				user_id: challenger.get('id'), 
				user_name: challenger.get('name')
			}, {
				success: function(model, response) {
					self.updateMetric(model, challenger, challenge);
				},
				error: function(model, response) {
					
				}
			});
		}
		
		if (user) {
			user_metric = this.where({user_id: user.get('id')})[0];
			if (user_metric) {
				this.updateMetric(user_metric, user, challenge);
			} else {
				this.create({
					user_id: user.get('id'), 
					user_name: user.get('name')
				}, {
					success: function(model, response) {
						self.updateMetric(model, user, challenge);
					},
					error: function(model, response) {
					
					}
				});
			}
		}
	},
	
	updateMetric: function(metric, user, challenge) {
		metric.set({
			challenges_started: metric.get('challenges_started') + this.challengesStarted(user, challenge),
			challenges_finished: metric.get('challenges_finished') + this.challengesFinished(user, challenge),
			challenges_created: metric.get('challenges_created') + this.challengesCreated(user, challenge),
			challenges_recieved: metric.get('challenges_recieved') + this.challengesRecieved(user, challenge),
			complete_replies: metric.get('completeReplies') + this.completeReplies(user, challenge),
			num_users_challenged: this.numUsersChallenged(user),
			num_challenged_users: this.challengesFinished(user)
		});
		metric.save();
	},
	
	challengesStarted: function(user, challenge) {
		var num = 0;

		if (!challenge.get('is_sent') && !challenge.get('is_finished')) {
			if (user.get('id') === challenge.get('challenger_id')) {
				num = 1;
			}
		}
		
		return num;
	},
	
	challengesFinished: function(user, challenge) {
		var num = 0;

		if (challenge.get('is_sent') && challenge.get('is_finished')) {
				num = 1;
		}
		
		return num;
	},
	
	challengesCreated: function(user, challenge) {
		var num = 0;
		
		if (challenge.get('is_sent') && !challenge.get('is_finished')) {
			if (user.get('id') === challenge.get('challenger_id')) {
				num = 1;
			}
		}
		
		return num;
	},
	
	challengesRecieved: function(user, challenge) {
		var num = 0;
		
		if (challenge.get('is_sent') && !challenge.get('is_finished')) {
			if (user.get('id') === challenge.get('user_id')) {
				num = 1;
			}
		}
		
		return num;
	},
	
	completeReplies: function(user, challenge) {
		var num = 0;
		
		if (challenge.get('is_sent') && challenge.get('is_finished')) {
			if (user.get('id') === challenge.get('user_id')) {
				num = 1;
			}
		}
		
		return num;
	},
	
	numUsersChallenged: function(user) {
		var num = 0,
			self = this;
		
		this.users.each(function(u) {
			if (self.challenges.where({challenger_id: user.get('id'), user_id: u.get('id')})[0]) {
				num = num + 1;
			}
		});
		
		return num;
	},
	
	numChallengedUsers: function(user) {
		var num = 0,
			self = this;
		
		this.users.each(function(u) {
			if (self.challenges.where({user_id: user.get('id'), challenger_id: u.get('id')})[0]) {
				num = num + 1;
			}
		});
		
		return num;
	},
	
	addTime: function(options) {
		var user = options.user,
			time = options.time,
			metric = this.where({user_id: user.get('id')})[0];

		if (metric) {
			metric.set({
				time_on_site: metric.get('time_on_site') + time
			});
			metric.save();
		} else {
			this.create({user_id: user.get('id'), user_name: user.get('name')}, {
				success: function(model, response) {
					model.set({
						time_on_site: model.get('time_on_site') + time
					});
					model.save();
				},
				error: function(model, response) {

				}
			});
		}
	},
	
	mfcAnswer: function(options) {
		var user = options.user,
			str = options.str,
			metric = this.where({user_id: user.get('id')})[0];

		if (metric) {
			if (str === 'yes') {
				metric.set({
					answered_yes: metric.get('answered_yes') + 1
				});
			} else {
				metric.set({
					answered_no: metric.get('answered_no') + 1
				});
			}
			metric.save();
		} else {
			this.create({user_id: user.get('id'), user_name: user.get('name')}, {
				success: function(model, response) {
					if (str === 'yes') {
						model.set({
							answered_yes: model.get('answered_yes') + 1
						});
					} else {
						model.set({
							answered_no: model.get('answered_no') + 1
						});
					}
					model.save();
				},
				error: function(model, response) {

				}
			});
		}
	},
	
	checkSignedIn: function(user) {
		var metric = this.where({user_id: user.get('id')})[0];
		
		if (user.get('signed_in') || user.get('signed_in_fb')) {
			if (metric) {
				if (!metric.get('signed_in')) {
					metric.set({
						signed_in: true
					});
					metric.save();
				}
			} else {
				this.create({user_id: user.get('id'), user_name: user.get('name')}, {
					success: function(model, response) {
						model.set({
							signed_in: true
						});
						model.save();
					},
					error: function(model, response) {

					}
				});
			}
		}
	},
	
	checkContinue: function(options) {
		var user = options.user,
			view = options.view,
			metric = this.where({user_id: user.get('id')})[0];
		if (metric) {
			if (!metric.get('hit_continue')) {
				metric.save({hit_continue: true}, {
					success: function(model, response) {
						console.log('success');
						view.fbLogin();
					},
					error: function(model, response) {
						console.log('error');
						view.fbLogin();
					}
				});
			}
		} else {
			this.create({user_id: user.get('id'), user_name: user.get('name')}, {
				success: function(model, response) {
					model.save({hit_continue: true}, {
						success: function(mod, resp) {
							view.fbLogin();
						},
						error: function(mod, resp) {
							view.fbLogin();
						}
					});
				},
				error: function(model, response) {

				}
			});
		}
	},
	
	setSignedIn: function(options) {
		var user = options.user,
			metric = this.where({user_id: user.get('id')})[0];
			
		if (metric) {
			if (!metric.get('signed_in')) {
				if (user.get('signed_in') || user.get('signed_in_fb')) {
					metric.set({
						signed_in: true
					});
					metric.save();
				}
			}
		}
	}
});