Fauxble.Views.PagesAux = Backbone.View.extend({
	
	template: JST['pages/aux'],
	
	initialize: function(options) {
		this.attr = options.attr;
		this.current_user = this.attr.users.get(this.attr.current_user.get('id'));
		
		//initially from hash
		//also triggers
		
		this.attr.users.trigger('global', this.doGlobalStuff, this);
		this.attr.users.trigger('issue', this.doIssueStuff, this);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		return this;
	},
	
	topUsers: function() {
		var users = this.attr.users.getTopFive(this.current_user, this.issue),
			view = new Fauxble.Views.UsersIndex({
				attr: this.attr,
				users: users
		});
		$(this.el).find('#top_users').html(view.render().el);
	},
	
	activityFeed: function() {
		
	},
	
	recentAnswers: function() {
		
	},
	
	userPictures: function() {
		
	}
});

/* left column in thirds
*  
*  TOP 3RD:
*   names and rank of top 5 fusers
*   current user rank
*   switches from global to issue when in challenges
*
*  MIDDLE 3RD:
*   recent user activity feed 
*   unless in challenge
*
*   if answering questions
*   show 5 most recent answers from other users
*
*  BOT 3RD:
*   picutres of anyone who has signed on
*   name appears in tooltip
*   switch from global to issue when in challenge	
*/