Fauxble.Views.PagesAux = Backbone.View.extend({
	
	template: JST['pages/aux'],
	
	events: {
		'click .like-button.sidebar' : 'gaEvent'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.current_user = this.attr.users.get(this.attr.current_user.get('id'));
		this.issue = null;
		this.question = null;
		this.subviews = [];
		this.feed = null;
		var hash = window.location.hash;
		
		if (hash.split('/question').length > 1 || hash.split('challenge').length > 1) {
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
				if (this.feed) {
					this.feed.onClose()
					this.feed = null;
				}
				this.recentAnswers();
			} else {
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
	
	topUsers: function() {
		var view = new Fauxble.Views.UsersIndex({
			attr: this.attr,
			users: this.attr.users.getTopUsers(this.current_user, this.issue, 5)
		});
		
		this.subviews.push(view);
		
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
			user: null
		});
		
		this.subviews.push(view);
		this.feed = view;
		
		$(this.el).find('#middle_header').html('Recent Activity');
		$(this.el).find('#middle').html(view.render().el);
	},
	
	recentAnswers: function() {
		var view = new Fauxble.Views.QuestionsAnswers({
			attr: this.attr,
			question: this.question
		});
		
		this.subviews.push(view);
		
		$(this.el).find('#middle_header').html('Recent Answers');
		$(this.el).find('#middle').html(view.render().el);
	},
	
	userPictures: function() {
		var view = new Fauxble.Views.IssuesUsers({
			attr: this.attr,
			issue: this.issue
		});
		
		this.subviews.push(view);
		
		$(this.el).find('#bottom').html(view.render().el);
	},
	
	likeButton: function() {
		var element = $(this.el).find('#bottom').find('.fb-like');
		
		if ($(element).hasClass('fb-like')) {
			if ($(element).children().length === 0) {
				FB.XFBML.parse();
			}
		} else {
			$(this.el).find('#bottom').html(JST['pages/like']);
		}
	},
	
	gaEvent: function() {
		gaEvent('Click', 'Like', 'Community', null);
	},
	
	onClose: function() {
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});