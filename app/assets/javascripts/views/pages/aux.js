Fauxble.Views.PagesAux = Backbone.View.extend({
	
	template: JST['pages/aux'],
	
	initialize: function(options) {
		this.attr = options.attr;
		this.current_user = this.attr.users.get(this.attr.current_user.get('id'));
		this.is_global = false;
		var hash = window.location.hash;
		
		if (hash.split('question').length > 1 || hash.split('challenge').length > 1) {
			this.is_global = true;
			this.issue = this.attr.issues.get(this.attr.challenges.get(parseInt(hash.split(''))).get('issue_id'));
		}
		
		this.attr.users.trigger('scope', this.switchScope, this);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			if (self.is_global) {
				self.topUsers();
				self.activityFeed();
				self.userPictures();
			} else {
				self.topUsers();
				self.recentAnswers();
				self.userPictures();
			}
		}, 0);
		
		return this;
	},
	
	switchScope: function(is_global) {
		if (this.is_global !== is_global) {
			this.is_global = is_global;
			this.render();
		}
	},
	
	topUsers: function() {
		var view = new Fauxble.Views.UsersIndex({
			attr: this.attr,
			users: this.attr.users.getTopFive(this.current_user, this.issue)
		});
		$(this.el).find('#top').html(view.render().el);
	},
	
	activityFeed: function() {
		var view = new Fauxble.Views.UsersFeed({
			attr: this.attr
		});
		$(this.el).find('#middle').html(view.render().el);
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