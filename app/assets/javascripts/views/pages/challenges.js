Fauxble.Views.PagesChallenges = Backbone.View.extend({
	
	template: JST['pages/challenges'],
	
	events: {
		'click #new_game' : 'newChallenge'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.sent = this.attr.challenges.getChallenges(this.user, false, true);
		this.recieved = this.attr.challenges.getChallenges(this.user, false, false);
		this.subviews = [];
		
		this.attr.users.trigger('scope');
	},
	
	render: function() {
		var self = this;

		$(this.el).addClass('home_challenges_container');
		$(this.el).html(this.template());
		
		setTimeout(function() {
			for (r = 0; r < self.recieved.length; r++) {
				self.appendChallenge(self.recieved[r], false, r)
			}
			for (s = 0; s < self.sent.length; s++) {
				self.appendChallenge(self.sent[s], true, s)
			}
		}, 0);
		return this;
	},
	
	appendChallenge: function(challenge, is_sent, count) {
		var view = new Fauxble.Views.ChallengesShow({
			attr: this.attr,
			challenge: challenge,
			is_sent: is_sent,
			count: count
		});
		this.subviews.push(view);
		if (is_sent) {
			$(this.el).find('#sent').append(view.render().el);
		} else {
			$(this.el).find('#recieved').append(view.render().el);
		}
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