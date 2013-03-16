Fauxble.Collections.Users = Backbone.Collection.extend({
	
	model: Fauxble.Models.User,
	url: 'users',
	
	initialize: function(models, options) {
		this.ranks = options.ranks;
		this.faux_users = null;
	},
	
	getTopFive: function(user, issue) {
		var self = this,
			length = 5,
			users = [],
			top_users = [],
			has_current_user = false;
		
		_.each(this.where({signed_in: true}), function(u) {
			users.push({user: u, rank: self.ranks.getRank(self, u, issue)});
		});
		_.each(this.where({signed_in_fb: true}), function(u) {
			users.push({user: u, rank: self.ranks.getRank(self, u, issue)});
		});
		
		users.sort(function(a, b) {
			return a.rank - b.rank;
		});
		
		if (users.length < 5) {
			length = users.length;
		}
		
		for (i = 0; i < length; i++) {
			top_users.push(users[i]);
			if (user && users[i].user.get('id') === user.get('id')) {
				has_current_user = true;
			}
		}
		
		if (user && !has_current_user) {
			top_users[4] = {user: user, rank: this.ranks.getRank(this, user, issue)};
		}
		
		return top_users;
	},
	
	authenticateUser: function(name, email, password, confirm, min_length) {
		var regex = /\S+@\S+\.\S+/;
			
		if (name.length > min_length - 1) {
			if (this.isUnique(name)) {
				if (regex.test(email)) {
					if (password.length > min_length - 1) {
						if (password === confirm) {
							this.createUser(name, email, password);
						} else {
							alert('passwords don\'t match');
						}
					} else {
						alert('password must be at least ' + min_length + ' characters long');
					}
				} else {
					alert('invalid email');
				}
			} else {
				alert('that user name is unavailable');
			}
		} else {
			alert('user name must be at least ' + min_length + ' characters long');
		}
	},
	
	isUnique: function(str) {
		var is_unique = true,
			users = this.toArray();
		
		for (u = 0; u < users.length; u++) {
			if (users[u].get('name').toLowerCase() === str.toLowerCase()) {
				is_unique = false;
				break;
			}
		}
		
		return is_unique;
	},
	
	createUser: function(name, email, password) {
		var self = this;
		
		this.create({
			name: name,
			encrypted_email: email,
			password: password,
			signed_in: true
		}, {
			success: function(model, response) {
				window.location.reload();
			},
			error: function(model, response) {
				// fail
			}
		});
	},
	
	createFromFacebook: function(user, view) {
		this.create({
			name: user['name'],
			uid: user['id'],
			provider: 'facebook'
		}, {
			success: function(model, response) {
				//end loading
				view.setChallengeUser(model);
			},
			error: function(model, response) {
				//alert error
			}
		});
	},
	
	getTopFusers: function(challenges, user) {
		var users = [],
			a_completes,
			b_completes,
			completes;
		
		this.each(function(u) {
			completes = challenges.where({is_finished: true, user_id: u.get('id')}).length + challenges.where({is_finished: true, challenger_id: u.get('id')}).length;
			if (completes > 0 && u.get('id') !== 1) {
				users.push(u);
			}
		});
		
		if (!isNaN(users.indexOf(user))) {
			users.splice(users.indexOf(user), 1);
		}
		
		users.sort(function(a, b) {
			a_completes = challenges.where({is_finished: true, user_id: a.get('id')}).length + challenges.where({is_finished: true, challenger_id: a.get('id')}).length;
			b_completes = challenges.where({is_finished: true, user_id: b.get('id')}).length + challenges.where({is_finished: true, challenger_id: b.get('id')}).length;
			
			return b_completes - a_completes;
		});
		
		return users;
	},
	
	getFacebookFriends: function() {
		var array = [];
		
		this.each(function(user) {
			if (user.get('signed_in_fb')) {
				FB.api('/me/friends?access_token=' + user.get('encrypted_token'), function(response) {
					array.concat(response['data']);
				});
			}
		});
	},
	
	getFauxUsers: function(num) {
		if (!this.faux_users) {
			this.faux_users = this.where({signed_in_fb: true, provider: null});
		}
		
		return _.shuffle(this.faux_users).slice(0, num);
	}
});
