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
			FB.api('/me/friends?access_token=' + self.user.get('encrypted_token'), function(response) {
				self.renderFriends(response['data']);
				Fauxble.router.stopLoading();
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
			Fauxble.router.startLoading();
			this.attr.users.createFromFacebook(user, this);
		}
	},
	
	setChallengeUser: function(user) {
		this.challenge.set({
			user_id: user.get('id')
		});
		this.challenge.save();
		Backbone.history.navigate('issue' + this.challenge.get('id') + '/select', true);
	},
	
	bindFilterUsers: function() {
		var self = this;
		
		$(this.el).find('#filter').val('');
		$(document).on('keyup', function(event) {
			filterKeyUp(event, self.friends, self);
		});
	},
	
	unbindFilterUsers: function() {
		$(document).off('keyup');
		$(this.el).find('#filter').val('Search for a friend...');
	},
	
	onClose: function() {
		var views = this.subviews;	
			
		for (var v = views.length; v > 0; v--) {
			var view = views[v - 1];

			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		}
	}
});