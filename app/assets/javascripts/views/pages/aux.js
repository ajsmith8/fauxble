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
		
		if (hash.split('question').length > 1 || hash.split('results').length > 1 || hash.split('issue').length > 1) {
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
		if (hash.split('results').length > 1) {
			issue = this.attr.issues.get(this.attr.challenges.get(parseInt(hash.split('results')[1])).get('issue_id'));
		}
		
		if (hash.split('question').length > 1) {
			hash = hash.split('/')[0];
			issue = this.attr.issues.get(this.attr.challenges.get(parseInt(hash.split('question')[1])).get('issue_id'));
		}
		
		if (hash.split('issue').length > 1) {
			if (hash.split('/')[1] !== 'select' && hash.split('/')[1] !== 's') {
				issue = this.attr.issues.where({url: hash.split('/')[1]})[0];
			}
		}
		
		return issue;
	},
	
	getQuestion: function(hash) {
		var question = null;
		
		if (hash.split('question').length > 1) {
			question = this.attr.questions.where({url: hash.split('/')[1]})[0];
		}
		
		return question;
	},
	
	topUsers: function() {
		var self = this;
		
		this.attr.ranks.fetchRanks(this.issue, null, callback);

		function callback() {
			var view = new Fauxble.Views.UsersIndex({
				attr: self.attr,
				users: self.attr.ranks.getTopUsers(self.current_user, self.issue, 5)
			});

			self.subviews.push(view);

			if (self.issue) {
				$(self.el).find('#top_header').html('Top Ranked Fusers for ' + self.issue.get('title'));
			} else {
				$(self.el).find('#top_header').html('Top Ranked Fusers');
			}

			$(self.el).find('#top').html(view.render().el);
		}
	},
	
	activityFeed: function() {
		var self = this;
		
		this.attr.events.fetchEvents(callback);
		
		function callback() {
			var view = new Fauxble.Views.UsersFeed({
				attr: self.attr,
				user: null
			});

			self.subviews.push(view);
			self.feed = view;

			$(self.el).find('#middle_header').html('Recent Activity');
			$(self.el).find('#middle').html(view.render().el);
		}
	},
	
	recentAnswers: function() {
		var self = this;
		
		this.attr.tasks.fetchTasks([this.question.get('id')], null, callback);
		
		function callback() {
			var view = new Fauxble.Views.QuestionsAnswers({
				attr: self.attr,
				question: self.question
			});

			self.subviews.push(view);

			$(self.el).find('#middle_header').html('Recent Answers');
			$(self.el).find('#middle').html(view.render().el);
		}
	},
	
	userPictures: function() {
		var self = this;
		
		this.attr.tasks.fetchIssueTasks(this.issue.get('id'), callback);
		
		function callback() {
			var view = new Fauxble.Views.IssuesUsers({
				attr: self.attr,
				issue: self.issue
			});

			self.subviews.push(view);

			$(self.el).find('#bottom').html(view.render().el);
		}
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
		var views = this.subviews;
		
		this.attr.users.unbind('scope', this.switchScope);
		
		for (var v = views.length; v > 0; v--) {
			var view = views[v - 1];
			
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		}
	}
});