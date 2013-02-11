Fauxble.Views.PagesChallenges = Backbone.View.extend({
	
	template: JST['pages/challenges'],
	
	events: {
		'click #new_game' : 'newChallenge'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			_.each(self.getRecieved(self.attr.challenges, self.user), function(challenge) {
				self.appendChallenge(challenge, false);
			});
			_.each(self.getSent(self.attr.challenges, self.user), function(challenge) {
				self.appendChallenge(challenge, true);
			});
		}, 0);
		return this;
	},
	
	appendChallenge: function(challenge, is_sent) {
		var view = new Fauxble.Views.ChallengesShow({
			attr: this.attr,
			challenge: challenge,
			is_sent: is_sent
		});
		this.subviews.push(view);
		if (is_sent) {
			$(this.el).find('#sent').append(view.render().el);
		} else {
			$(this.el).find('#recieved').append(view.render().el);
		}
	},
	
	getRecieved: function(challenges, user) {
		return challenges.where({user_id: user.get('id'), is_finished: false, is_sent: true});
	},
	
	getSent: function(challenges, user) {
		return challenges.where({challenger_id: user.get('id'), is_finished: false, is_sent: true});
	},
	
	newChallenge: function() {
		//start loading
		this.attr.challenges.createChallenge(this.user, null);
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