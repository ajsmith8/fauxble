Fauxble.Views.EventsShow = Backbone.View.extend({
	
	events: {
		'click .actual_name' : 'profile',
		'click #issue' : 'issueShow'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.feed = options.feed;
		
		this.defaults();
	},
	
	defaults: function() {
		var kind = this.feed.get('kind'),
			id = this.feed.get('model_id');
		
		if (kind === 'challenge') {
			this.model = this.attr.challenges.get(id);
			this.user = this.attr.users.get(this.model.get('user_id'));
			this.challenger = this.attr.users.get(this.model.get('challenger_id'));
			this.issue = this.attr.issues.get(this.model.get('issue_id'));
			this.template = JST['events/challenge'];
		} else if (kind === 'achievable') {
			this.model = this.attr.user_achievables.get(id);
			this.user = this.attr.users.get(this.model.get('user_id'));
			this.achievable = this.attr.achievable.get(this.model.get('achievable_id'));
			this.template = JST['events/achievable'];
		} else {
			this.model = this.attr.users.get(id);
			this.template = JST['events/user'];
		}
	},
	
	render: function() {
		$(this.el).addClass('feed_item');
		$(this.el).html(this.template({
			model: this.model,
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