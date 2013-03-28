Fauxble.Views.PagesEvent = Backbone.View.extend({
	
	events: {
		'click .actual_name' : 'profile',
		'click #issue' : 'issueShow'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.model = options.feed.obj;
		this.type = options.feed.type;
		
		this.user = this.attr.users.get(this.model.get('user_id'));
		this.challenger = this.attr.users.get(this.model.get('challenger_id'));
		this.person = this.attr.users.get(this.model.get('id'));
		this.achievable = this.attr.achievables.get(this.model.get('achievable_id'));
		this.issue = this.attr.issues.get(this.model.get('issue_id'));
		
		
		if (this.type === 'user_achievable') {
			this.template = JST['pages/ua_event'];
		} else if (this.type === 'challenge') {
			this.template = JST['pages/c_event'];
		} else {
			this.template = JST['pages/u_event'];
		}
	},
	
	render: function() {
		$(this.el).addClass('feed_item');
		$(this.el).html(this.template({
			user: this.user,
			challenger: this.challenger,
			person: this.person,
			achievable: this.achievable,
			issue: this.issue
		}));
		return this;
	},
	
	profile: function(event) {
		Backbone.history.navigate('user' + $(event.target).attr('id'), true);
	},
	
	issueShow: function() {
		Backbone.history.navigate('issue' + this.model.get('issue_id'), true);
	}
});