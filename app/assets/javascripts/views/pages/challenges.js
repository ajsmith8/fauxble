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
		var recieved = this.recieved,
			sent = this.sent,
			self = this;

		$(this.el).addClass('home_challenges_container');
		$(this.el).html(this.template());
		
		setTimeout(function() {
			for (var r = 0, r_len = recieved.length; r < r_len; r++) {
				self.appendChallenge(recieved[r], false, r)
			}
			for (var s = 0, s_len = sent.length; s < s_len; s++) {
				self.appendChallenge(sent[s], true, s)
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