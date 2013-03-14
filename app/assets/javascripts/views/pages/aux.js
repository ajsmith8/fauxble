Fauxble.Views.PagesAux = Backbone.View.extend({
	
	template: JST['pages/aux'],
	
	initialize: function(options) {
		this.attr = options.attr;
		this.current_user = this.attr.users.get(this.attr.current_user.get('id'));
		this.issue = null;
		this.question = null;
		this.user = null;
		var hash = window.location.hash;
		
		if (hash.split('/question').length > 1 || hash.split('challenge').length > 1 || hash.split('user').length > 1) {
			this.user = this.getUser(hash);
			this.issue = this.getIssue(hash);
			this.question = this.getQuestion(hash);	
		}
		
		this.attr.users.on('scope', this.switchScope, this);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.topUsers();
			
			if (self.issue) {
				self.userPictures();
			} else {
				self.likeButton();
			}
			
			if (self.question) {
				self.recentAnswers();
			} else {
				self.activityFeed();
			}	
		}, 0);
		
		return this;
	},
	
	switchScope: function() {
		var hash = window.location.hash,
			user = this.getUser(hash),
			issue = this.getIssue(hash),
			question = this.getQuestion(hash);
		
		if (issue !== this.issue) {
			this.issue = issue;
			
			this.topUsers();
			
			if (this.issue) {
				this.userPictures();
			} else {
				this.likeButton();
			}
		}
		
		if (question !== this.question) {
			this.question = question;
			
			if (this.question) {
				this.recentAnswers();
			} else {
				if (!user) {
					this.activityFeed();
				}
			}
		}
		
		if (user !== this.user) {
			this.user = user;
			
			if (this.user) {
				this.activityFeed();
			}
		}
	},

	getIssue: function(hash) {
		var issue = null;
		
		if (hash.split('challenge').length > 1) {
			issue = this.attr.issues.get(this.attr.challenges.get(parseInt(hash.split('challenge')[1])).get('issue_id'));
		}
		
		if (hash.split('/question').length > 1) {
			issue = this.attr.issues.get(this.attr.challenges.get(parseInt(hash.split('/question')[0].substring(1))).get('issue_id'));
		}
		
		return issue;
	},
	
	getQuestion: function(hash) {
		var question = null;
		
		if (hash.split('/question').length > 1) {
			question = this.attr.questions.get(parseInt(hash.split('/question')[1]));
		}
		
		return question;
	},
	
	getUser: function(hash) {
		var user = null;
		
		if (hash.split('user').length > 1) {
			user = this.attr.users.get(parseInt(hash.split('user')[1]));
		}
		
		return user;
	},
	
	topUsers: function() {
		var view = new Fauxble.Views.UsersIndex({
			attr: this.attr,
			users: this.attr.users.getTopFive(this.current_user, this.issue)
		});
		
		if (this.issue) {
			$(this.el).find('#top_header').html('Top Ranked Fusers for ' + this.issue.get('title'));
		} else {
			$(this.el).find('#top_header').html('Top Ranked Fusers');
		}
		
		$(this.el).find('#top').html(view.render().el);
	},
	
	activityFeed: function() {
		var view = new Fauxble.Views.UsersFeed({
			attr: this.attr,
			user: this.user
		});
		
		if (this.user) {
			if (this.current_user && this.current_user.get('id') === this.user.get('id')) {
				$(this.el).find('#middle_header').html('Your Recent Activity');
			} else {
				$(this.el).find('#middle_header').html(this.user.get('name').split(' ')[0] + '\'s Recent Activity');
			}
		} else {
			$(this.el).find('#middle_header').html('Recent Activity');
		}
		
		$(this.el).find('#middle').html(view.render().el);
	},
	
	recentAnswers: function() {
		var view = new Fauxble.Views.QuestionsAnswers({
			attr: this.attr,
			question: this.question
		});
		$(this.el).find('#middle_header').html('Recent Answers');
		$(this.el).find('#middle').html(view.render().el);
	},
	
	userPictures: function() {
		var view = new Fauxble.Views.IssuesUsers({
			attr: this.attr,
			issue: this.issue
		});
		$(this.el).find('#bottom').html(view.render().el);
	},
	
	likeButton: function() {
		$(this.el).find('#bottom').html(JST['pages/like']);
		FB.XFBML.parse();
	}
});