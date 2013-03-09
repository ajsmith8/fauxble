Fauxble.Views.UsersFeed = Backbone.View.extend({
	
	template: JST['users/feed'],
	
	events: {
		'click #more' : 'renderFeed'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.current_location = 0;
		//should check for conditions before render
		//use prepend
		this.attr.user_achievables.on('add', this.newAchievable, this);
		this.attr.user_achievables.on('reset', this.render, this);
		this.attr.users.on('change:signed_on', this.newUser, this);
		this.attr.users.on('change:signed_on_fb', this.newUser, this);
		this.attr.users.on('reset', this.render, this);
		this.attr.challenges.on('change:is_sent', this.newChallenge, this);
		this.attr.challenges.on('change:is_finished', this.newChallenge, this);
		this.attr.challenges.on('reset', this.render, this);
		//profile view
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.setFeedItems();
		}, 0);
		
		return this;
	},
	
	newAchievable: function(model) {
		this.updateFeed({obj: model, type: 'user_achievable'});
	},
	
	newChallenge: function(model) {
		if (model.get('is_sent') || model.get('is_finished')) {
			this.updateFeed({obj: model, type: 'challenge'});
		}
	},
	
	newUser: function(model) {
		if (model.get('signed_in') || model.get('signed_in_fb')) {
			this.updateFeed({obj: model, type: 'user'});
		}
	},
	
	setFeedItems: function() {
		var self = this,
			feed = [];
		
		this.attr.user_achievables.each(function(ua) {
			feed.push({obj: ua, type: 'user_achievable'});
		});
		this.attr.challenges.each(function(c) {
			if (c.get('is_sent') || c.get('is_finished')) {
				feed.push({obj: c, type: 'challenge'});
			}
		});
		this.attr.users.each(function(u) {
			if (u.get('signed_in') || u.get('signed_in_fb')) {
				feed.push({obj: u, type: 'user'});
			}
		});
		
		feed.sort(function(a, b) {
			if (a.obj.get('updated_at') < b.obj.get('updated_at')) {
				return 1;
			}
			if (a.obj.get('updated_at') > b.obj.get('updated_at')) {
				return -1;
			}
			return 0; 
		});
		
		this.feed = feed;

		this.renderFeed();
	},
	
	renderFeed: function() {
		if (this.current_location >= this.feed.length) {
			$(this.el).find('#more').addClass('hide');
		}
		
		for (i = this.current_location; i < this.current_location + 5; i++) {
			if (this.feed[i]) {
				this.appendFeed(this.feed[i]);
			} else {
				break;
			}
		}
		
		this.current_location = this.current_location + i;
	},
	
	appendFeed: function(obj) {
		var view = new Fauxble.Views.PagesEvent({
			attr: this.attr,
			feed: obj
		});
		$(this.el).append(view.render().el);
	},
	
	updateFeed: function(obj) {
		this.feed.unshift(obj);

		var view = new Fauxble.Views.PagesEvent({
			attr: this.attr,
			feed: obj
		});
		$(this.el).prepend(view.render().el);
	},
	
	onClose: function() {
		this.attr.user_achievables.unbind('all', this.render);
		this.attr.users.unbind('all', this.render);
		this.attr.challenges.unbind('all', this.render);
	}
});