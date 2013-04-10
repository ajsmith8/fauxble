Fauxble.Views.UsersFeed = Backbone.View.extend({
	
	template: JST['users/feed'],
	
	events: {
		'click #more' : 'renderFeed'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.profile = options.profile;
		this.current_location = 0;
		
		this.attr.events.on('stuff', this.updateFeed, this);
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.setFeedItems();
		}, 0);
		
		return this;
	},
	
	setFeedItems: function() {
		var feed = this.attr.events.toArray();
		
		feed.sort(function(a, b) {
			if (a.get('updated_at') < b.get('updated_at')) {
				return 1;
			}
			if (a.get('updated_at') > b.get('updated_at')) {
				return -1;
			}
			return 0; 
		});
		
		this.feed = feed;

		this.renderFeed();
	},
	
	renderFeed: function() {
		var len = 7;
		
		if (this.profile) {
			len = 6
		}
		
		if (this.current_location >= this.feed.length) {
			$(this.el).find('#more').addClass('hide');
		}
		
		for (var i = this.current_location; i < this.current_location + len; i++) {
			if (this.feed[i]) {
				this.appendFeed(this.feed[i]);
			} else {
				break;
			}
		}
		
		this.current_location = this.current_location + i;
	},
	
	appendFeed: function(obj) {
		var view = new Fauxble.Views.EventsShow({
			attr: this.attr,
			feed: obj
		});
		$(this.el).append(view.render().el);
	},
	
	updateFeed: function(model) {
		this.feed.unshift(model);

		var view = new Fauxble.Views.EventsShow({
			attr: this.attr,
			feed: model
		});
		$(this.el).prepend(view.render().el);
	},
	
	removeFeed: function(loc) {
		var element = $(this.el).find('.feed_item#' + loc);
		
		if (element) {
			$(element).remove();
		}
		
		if (!loc) {
			$(elements).get('.feed_item')[7].remove();
		}
	},
	
	onClose: function() {
		this.attr.events.unbind('stuff', this.updateFeed);
	}
});