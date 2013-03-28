Fauxble.Views.PagesIssue = Backbone.View.extend({
	
	template: JST['pages/issue'],
	
	events: {
		'click #user_check' : 'checkUser'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.ids = this.attr.tasks.getIssueFactsAndUsers(this.issue);
		this.users = [];
		this.comments = this.attr.comments.where({issue_id: this.issue.get('id'), ancestry: null});
		
		for (var i = this.ids.length; i > 0; i--) {
			var user = this.attr.users.get(parseInt(this.ids[i - 1].split('/')[0]));
			
			if (this.users.indexOf(user) === -1) {
				this.users.push(user);
			}
		}
		// # facts with issue
		// # of this issue learned by users
		// community
		// facts of this issue shared
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template({
			issue: this.issue,
			facts: this.attr.questions.getNumQuestions(this.issue),
			learned: this.ids.length,
			users: this.users.length
		}));
		
		setTimeout(function() {
			//self.renderCommunity();
			self.renderComments();
		}, 0);
		
		return this;
	},
	
	renderCommunity: function() {
		var users = this.users;
		
		for (var u = users.length; u > 0; u--) {
			this.appendUser(users[u - 1]);
		}
	},
	
	appendUser: function(user) {
		var view = new Fauxble.Views.UsersCommunity({
			attr: this.attr,
			user: user
		});
		$('#community').append(view.render().el);
	},
	
	renderComments: function() {
		var view = new Fauxble.Views.CommentsIndex({
			attr: this.attr,
			comments: this.comments,
			issue: this.issue
		});
		$(this.el).find('#comments').html(view.render().el);
	},
	
	checkUser: function() {
		if (this.user && (this.user.get('signed_in') || this.user.get('signed_in_fb'))) {
			Backbone.history.navigate('', true);
		} else {
			window.Fauxble.router.signInPopup();
		}
	}
});