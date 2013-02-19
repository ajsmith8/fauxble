Fauxble.Views.UsersFacebook = Backbone.View.extend({
	
	template: JST['users/facebook'],
	
	events: {
		'click .friend' : 'checkUser',
		'focus #filter' : 'bindFilterUsers',
		'blur #filter' : 'unbindFilterUsers'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.challenge = options.challenge;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			FB.api('/me/friends?access_token=' + self.user.get('token'), function(response) {
				self.renderFriends(response['data']);
				//stop loading
			});
		}, 0);
		
		return this;
	},
	
	renderFriends: function(friends) {
		this.friends = this.alphabetize(friends);
		
		for (i = 0; i < this.friends.length; i++) {
			this.appendFbFriend(this.friends[i], i);
		}
	},
	
	appendFbFriend: function(friend, index) {
		var view = new Fauxble.Views.UsersFriend({
			attr: this.attr,
			friend: friend,
			loc: index
		});
		this.subviews.push(view);
		$(this.el).find('#friends').append(view.render().el);
	},
	
	alphabetize: function(array) {
		var name_a,
			name_b;
			
		array.sort(function(a,b) {
			name_a = a['name'].split(' ')[a['name'].split(' ').length - 1].toLowerCase();
			name_b = b['name'].split(' ')[b['name'].split(' ').length - 1].toLowerCase();
			if (name_a < name_b) {
				return -1;
			}
			if (name_b < name_a) {
				return 1;
			}
			return 0;
		});
		
		return array;
	},
	
	checkUser: function(event) {
		var user = this.friends[parseInt($(event.target).closest('.friend').attr('id'))];
		
		if (this.attr.users.where({uid: user['id']})[0]) {
			this.setChallengeUser(this.attr.users.where({uid: user['id']})[0]);
		} else {
			//start loading
			this.attr.users.createFromFacebook(user, this);
		}
	},
	
	setChallengeUser: function(user) {
		this.challenge.set({
			user_id: user.get('id')
		});
		this.challenge.save();
		Backbone.history.navigate('issues' + this.challenge.get('id'), true);
	},
	
	bindFilterUsers: function() {
		
	},
	
	unbindFilterUsers: function() {
		
	},
	
	onClose: function() {
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});
//alphabet scroll
//search bar filters friends