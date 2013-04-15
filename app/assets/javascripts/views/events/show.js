Fauxble.Views.EventsShow = Backbone.View.extend({
	
	events: {
		'click .actual_name' : 'profile',
		'click #issue' : 'issueShow'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.feed = options.feed;

		var kind = this.feed.get('kind'),
			id = this.feed.get('model_id');
		
		if (kind === 'challenge') {
			this.user = this.attr.users.get(this.feed.get('user_id'));
			this.challenger = this.attr.users.get(this.feed.get('challenger_id'));
			this.issue = this.attr.issues.get(this.feed.get('issue_id'));
			this.template = JST['events/challenge'];
		} else if (kind === 'achievable') {
			this.user = this.attr.users.get(this.feed.get('user_id'));
			this.achievable = this.attr.achievables.get(this.feed.get('achievable_id'));
			this.template = JST['events/achievable'];
		} else {
			this.user = this.attr.users.get(this.feed.get('user_id'));
			this.template = JST['events/user'];
		}
	},
	
	render: function() {
		$(this.el).addClass('feed_item');
		$(this.el).html(this.template({
			feed: this.feed,
			user: this.user,
			challenger: this.challenger,
			achievable: this.achievable,
			issue: this.issue
		}));
		return this;
	},
	
	profile: function(event) {
		var user = this.attr.users.get(parseInt($(event.target).attr('id')));
		
		user.show();
	},
	
	issueShow: function() {
		this.issue.show();
	}
});