Fauxble.Collections.Users = Backbone.Collection.extend({
	
	model: Fauxble.Models.User,
	url: 'users',
	
	initialize: function(models, options) {
		this.ranks = options.ranks;
		this.faux_users = null;
	},
	
	comparator: function(user) {
		return this.ranks.getScore(user, null);
	},
	
	getTopUsers: function(user, issue, length) {
		var self = this,
			users = this.getSignedInUsers(),
			tops = [],
			has_current_user = false,
			current_user;

		users.sort(function(a, b) {
			return self.ranks.getScore(b, issue) - self.ranks.getScore(a, issue);
		});
			
		if (users.length < length) {
			length = users.length;
		}

		for (u = 0; u < length; u++) {
			tops.push({user: users[u], rank: u + 1});
			if (user && users[u].get('id') === user.get('id')) {
				has_current_user = true;
			}
		}
		
		if (!has_current_user && users.indexOf(user) !== -1) {
			tops[length - 1] = {user: user, rank: users.indexOf(user) + 1};
		}

		return tops;
	},
	
	getSignedInUsers: function() {
		return this.where({signed_in: true}).concat(this.where({signed_in_fb: true}));
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
			if (users[u].get('name')) {
				if (users[u].get('name').toLowerCase() === str.toLowerCase()) {
					is_unique = false;
					break;
				}
			}
		}
		
		return is_unique;
	},
	
	createUser: function(name, email, password) {
		var self = this;
		
		gaEvent('Login', 'Email', 'MFC Right', null);
		
		this.create({
			name: name,
			encrypted_email: email,
			password: password,
			signed_in: true
		}, {
			success: function(model, response) {
				Backbone.history.navigate('challenges', true);
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
	
	getActiveFusers: function(challenges, user, length) {
		var users = this.getSignedInUsers(),
			completes = [], 
			actives = [];
		
		for (u = 0; u < users.length; u++) {
			completes = challenges.getChallenges(users[u], true, null);
			
			if (completes.length > 0) {
				if (users[u].get('id') !== user.get('id')) {
					actives.push({user: users[u], num: completes.length});
				}
			}
		}
		
		actives.sort(function(a, b) {
			return b.num - a.num;
		});
		
		if (actives.length < length) {
			length = actives.length;
		}
		
		return actives.splice(0, length);
	},
	
	getFacebookFriends: function() {
		/*var array = [];
		
		this.each(function(user) {
			if (user.get('signed_in_fb')) {
				FB.api('/me/friends?access_token=' + user.get('encrypted_token'), function(response) {
					array.concat(response['data']);
				});
			}
		});*/
	},
	
	getFauxUsers: function(num) {
		if (!this.faux_users) {
			this.faux_users = this.where({signed_in_fb: true, provider: null});
		}
		
		return _.shuffle(this.faux_users).slice(0, num);
	},
	
	getGlobalRank: function(user) {
		var users = this.getSignedInUsers(),
			rank = users.length + 1,
			self = this;
		
		users.sort(function(a, b) {
			return self.ranks.getScore(b, null) - self.ranks.getScore(a, null);
		});
			
		if (users.indexOf(user) !== -1) {
			rank = users.indexOf(user) + 1;
		}
		
		return rank;
	}
});
