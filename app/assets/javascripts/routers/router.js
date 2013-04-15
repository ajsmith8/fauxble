Fauxble.Routers.Router = Backbone.Router.extend({
	
	routes: {
		''				: 'checkCurrentUser',			//issue			question
		'challenges' 		: 'challenges',				//false			false
		'about'				: 'about',					//false			false
		'million-fact-challenge' : 'mfc',				//false			false
		'user:id/select' 			: 'pagesNew',		//false			false
		'issue:id/select'			: 'issueSelect',	//false			false
		'issue/:name'			: 'issue',				//true			false
		'issues'		: 'issues',						//false			false
		'question:id/:name' : 'question',				//true			true
		'results:id' 		: 'results',				//true			false
		'user/:name' 			: 'profile',			//false			false
		
		/*'random/content/users'		: 'generateRandomUsers',
		'random/content/challenges'	: 'generateRandomContent',
		'random/content/ranks'		: 'generateRandomRanks',*/ 
	},
	
	initialize: function(options) {
		this.user = options.users.get(options.current_user.get('id'));
		this.columns = false;
		this.like_view = null;
		this.working = false;
		
		this.attr = {
			current_user: options.current_user,
			users: options.users,
			issues: options.issues,
			questions: options.questions,
			sliders: options.sliders,
			answers: options.answers,
			sources: options.sources,
			comments: options.comments,
			challenges: options.challenges,
			tasks: options.tasks,
			ranks: options.ranks,
			achievables: options.achievables,
			user_achievables: options.user_achievables,
			feedbacks: options.feedbacks,
			events: options.events
		};
		
		this.header();
		this.footer();
		this.feedbackTab();
		this.likeTab();
		this.chat();
		this.popup();
		this.showFeedback();
		
		if (this.attr.current_user.get('uid') === '530468649') {
			this.pwnCameron();
		}
		
		var id = 0,
			self = this;
			
		if (this.user) {
			id = this.user.get('id');
		}
		gaCustomVar(1, 'User', String(id), 2);
		
		this.bind('all', this._trackPageview);
		this.bind('all', this.likeSlideOut);
	},
	
	_trackPageview: function() {
	    gaPageview(Backbone.history.getFragment(), this.user);
	},
	
	likeSlideOut: function() {
		var self = this;
		
		if (window.like && this.like_view) {
			FB.getLoginStatus(function(response) {
				if (response.authResponse.accessToken) {
					FB.api('/me/likes/471887209511817?access_token=' + response.authResponse.accessToken,function(like_response) {
						if (like_response.data) {
							if(like_response.data[0]) {
								window.like = false;
							} else {
								self.slideItOut();
							}
						}
					});
				}
			});
		}
	},
	
	slideItOut: function() {
		var self = this;
		
		if (!this.working) {
			this.working = true;
			setTimeout(function() {
				self.like_view.slideOut();
				self.working = false;
			}, 2000);
		}
	},
	
	triggerPage: function() {
		this.attr.users.trigger('page');
	},
	
	renderColumns: function() {
		if (!this.columns) {
			this.columns = true;
			$('.page').html(JST['pages/columns']);
			$('.test').html(JST['pages/background']);
		}
	},
	
	checkTutorial: function(user, str) {
		var has_seen = false,
			tutorial = [];
		
		if (user) {
			if (user.get('tutorials')) {
				tutorial = user.get('tutorials').split('/');

				for (t = 0; t < tutorial.length; t++) {
					if (tutorial[t] === str) {
						has_seen = true;
						break;
					}
				}
			}
			
			if (!has_seen) {
				if (tutorial.length === 0) {
					user.set({
						tutorials: str
					});
				} else {
					user.set({
						tutorials: user.get('tutorials') + '/' + str
					});
				}
				user.save();
				
				return false;
			} else {
				return true;
			}
		}
	},
	
	setCurrentView: function(view) {
		if (this.current_view) {
			this.current_view.remove();
			this.current_view.unbind();
			
			if (this.current_view.onClose) {
				this.current_view.onClose();
			}
		}
		
		this.current_view = view;
	},
	
	setSubview: function(view, str) {
		if (this.str !== str) {
			if (this.subview) {
				this.subview.remove();
				this.subview.unbind();

				if (this.subview.onClose) {
					this.subview.onClose();
				}
			}
			this.str = str
			this.subview = view;
			$('.left.column').html(view.render().el);
		}
	},
	
	checkCurrentUser: function() {
		if (this.user) {
			Backbone.history.navigate('challenges', true);
		} else {
			this.pagesHome();
		}
	},
	
	header: function() {
		var view = new Fauxble.Views.PagesHeader({
			attr: this.attr
		});
		$('.header').html(view.render().el);
	},
	
	footer: function() {
		var view = new Fauxble.Views.PagesFooter({
			attr: this.attr
		});
		$('#footer').html(view.render().el);
	},
	
	likeTab: function() {
		var view = new Fauxble.Views.FeedbacksLike({
			attr: this.attr,
			element: $('.like-feedback')
		});
		$('.like-feedback').html(view.render().el);
		this.like_view = view;
	},
	
	feedbackTab: function() {
		var view = new Fauxble.Views.FeedbacksTab({
			attr: this.attr
		});
		this.feedback = view;
		$('.feedback').html(view.render().el);
	},
	
	showFeedback: function() {
		var self = this;
		
		if (this.feedback) {
			setTimeout(function() {
				self.feedback.popup();
				gaEvent('Feedback', '3 Minute', self.feedback.url, null);
			}, 180000);
		}
	},
	
	feedbackPopup: function(url) {
		var view = new Fauxble.Views.FeedbacksPopup({
			attr: this.attr,
			element: $('#background'),
			url: url
		});
		$('#tutorial').html(view.render().el);
	},
	
	popup: function() {
		var view = new Fauxble.Views.PopupsIndex({
			attr: this.attr
		});
		$('.popup').html(view.render().el);
	},
	
	pagesHome: function() {
		this.columns = false;
		var view = new Fauxble.Views.PagesHome({
			attr: this.attr
		});
		this.setCurrentView(view);
		$('.test').empty();
		$('.page').html(view.render().el);
		this.triggerPage();
	},
	
	about: function() {
		this.renderColumns();
		var view = new Fauxble.Views.PagesAbout({
			attr: this.attr
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		this.triggerPage();
	},
	
	mfc: function() {
		this.renderColumns();
		var right = new Fauxble.Views.MfcRight({
			attr: this.attr,
			router: this
		});
		//facts learned
		var left = new Fauxble.Views.MfcLeft({
			attr: this.attr
		});
		this.setCurrentView(right);
		this.setSubview(left, 'mfc');
		$('.right.column').html(right.render().el);
		$('.left.column').html(left.render().el);
		this.triggerPage();
	},
	
	mfcQuestion: function() {
		var element = $('#tutorial'),
			background = $('#background');
		var view = new Fauxble.Views.MfcPopup({
			attr: this.attr,
			element: element,
			background: background
		});
		$(element).html(view.render().el);
	},
	
	mfcLike: function() {
		var element = $('#tutorial'),
			background = $('#background');
		var view = new Fauxble.Views.MfcLike({
			attr: this.attr,
			element: element,
			background: background
		});
		$(element).html(view.render().el);
	},
	
	signin: function() {
		var view = new Fauxble.Views.PagesSignin({
			attr: this.attr
		});
		this.setSubview(view, 'signin');
	},
	
	challenges: function() {
		//challenges for current_user
		this.renderColumns();
		var	view = new Fauxble.Views.PagesChallenges({
			attr: this.attr
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		if (!this.checkTutorial(this.user, 'challenges')) {
			this.renderTutorial('challenges');
		}
		this.triggerPage();
	},
	
	feed: function() {
		//ranks events task
		var view = new Fauxble.Views.PagesAux({
			attr: this.attr
		});
		this.setSubview(view, 'feed');
	},
	
	chat: function() {
		/*var view = new Fauxble.Views.PagesChat({
			attr: this.attr
		});
		$('.left.column.bottom').html(view.render().el);*/
	},
	
	pagesNew: function(id) {
		this.renderColumns();
		var view = new Fauxble.Views.PagesNew({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(id))
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		this.triggerPage();
	},
	
	issueSelect: function(id) {
		this.renderColumns();
		var view = new Fauxble.Views.PagesIssues({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(id))
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		
		if (!this.checkTutorial(this.user, 'issues')) {
			this.renderTutorial('issues');
		}
		this.triggerPage();
	},
	
	issues: function() {
		var self = this;
		this.columns = false;
		this.subview = null;
		this.str = '';
		
		if (window.issues_loaded) {
			callback();
		} else {
			this.startLoading();
			this.attr.issues.fetchIssues(callback);
		}
		
		function callback() {
			var view = new Fauxble.Views.PagesPreview({
				attr: self.attr
			});
			self.setCurrentView(view);
			$('.test').empty();
			$('.page').html(view.render().el);
			self.triggerPage();
			self.stopLoading();
		}
	},
	
	issue: function(name) {
		var self = this,
			issue;
		this.startLoading();
		
		if (!window.issues_loaded) {
			this.attr.issues.fetchIssues(setIssue);
		} else {
			setIssue();
		}
		
		function setIssue() {
			issue = self.attr.issues.where({url: name})[0];
			self.attr.ranks.fetchRanks(issue);
			self.attr.comments.fetchComments(issue, callback);
		}
		
		function callback() {
			var view = new Fauxble.Views.PagesIssue({
				attr: self.attr,
				issue: issue
			});
			
			self.renderColumns();
			self.setCurrentView(view);
			self.feed();
			
			$('.right.column').html(view.render().el);

			self.triggerPage();
			self.stopLoading();
		}
	},
	
	question: function(id, name) {
		var self = this,
			challenge = this.attr.challenges.get(parseInt(id)),
			issue = this.attr.issues.get(challenge.get('issue_id')),
			users = [challenge.get('challenger_id'), challenge.get('user_id')],
			question = this.attr.questions.where({url: name})[0],
			split = challenge.get('question_ids').split('/'),
			loaded = true,
			ids = [];
		
		for (var i = 0, len = split.length; i < len; i++) {
			ids.push(parseInt(split[i]));
		}
		
		if (window.challenge_id === challenge.get('id')) {
			callback();
		} else {
			window.challenge_id = challenge.get('id');
			this.startLoading();
			setQuestion();
		}
		
		function setQuestion() {
			self.attr.sources.fetchSources(ids);
			self.attr.answers.fetchAnswers(ids);
			self.attr.sliders.fetchSliders(ids);
			self.attr.ranks.fetchRanks(issue, users, null);
			self.attr.tasks.fetchTasks(ids, challenge, callback);
		}
		
		function callback() {
			var view = new Fauxble.Views.PagesQuestion({
				attr: self.attr,
				challenge: challenge,
				question: question
			});
			self.renderColumns();
			self.setCurrentView(view);
			self.feed();
			$('.right.column').html(view.render().el);

			if ($(view.el).find('#versus').children().length === 0) {
				self.versus(self.attr.challenges.get(parseInt(id)), view);
			}

			if (question.get('is_slider')) {
				if (!self.checkTutorial(self.user, 'slider')) {
					self.renderTutorial('slider');
				}
			} else {
				if (!self.checkTutorial(self.user, 'answers')) {
					self.renderTutorial('answers');
				}
			}
			
			self.triggerPage();
			self.stopLoading();
		}
	},
	
	versus: function(challenge, view) {
		var versus = new Fauxble.Views.IssuesVersus({
			attr: this.attr,
			challenge: challenge
		});
		view.subviews.push(versus);
		$(view.el).find('#versus').html(versus.render().el);
	},
	
	results: function(id) {
		var self = this,
			challenge = this.attr.challenges.get(parseInt(id)),
			issue = this.attr.issues.get(challenge.get('issue_id')),
			users = [challenge.get('challenger_id'), challenge.get('user_id')],
			split = challenge.get('question_ids').split('/'),
			ids = [];
		
		for (var i = 0, len = split.length; i < len; i++) {
			ids.push(parseInt(split[i]));
		}
		
		if (window.challenge_id === challenge.get('id')) {
			callback();
		} else {
			window.challenge_id = challenge.get('id');
			this.startLoading();
			setQuestions();
		}
		
		function setQuestions() {
			self.attr.sources.fetchSources(ids);
			self.attr.answers.fetchAnswers(ids);
			self.attr.sliders.fetchSliders(ids);
			self.attr.ranks.fetchRanks(issue, users, null);
			self.attr.tasks.fetchTasks(ids, challenge, callback);
		}
		
		function callback() {
			var view = new Fauxble.Views.PagesResults({
				attr: self.attr,
				challenge: challenge
			});
			self.renderColumns();
			self.setCurrentView(view);
			self.feed();
			$('.right.column').html(view.render().el);

			if ($(view.el).find('#versus').children().length === 0) {
				self.versus(self.attr.challenges.get(parseInt(id)), view);
			}

			if (!self.checkTutorial(self.user, 'results')) {
				self.renderTutorial('results');
			}
			self.triggerPage();
			self.stopLoading();
		}
	},
	
	profile: function(name) {
		var self = this,
			user = this.attr.users.where({url: name})[0];
		
		this.startLoading();
		this.attr.ranks.fetchUserRanks(user);
		this.attr.user_achievables.fetchUserAchievables(user, null, null);
		this.attr.events.fetchUserEvents(user);
		this.attr.challenges.fetchChallenges(user, callback);
		
		function callback() {
			var view = new Fauxble.Views.PagesProfile({
				attr: self.attr,
				user: user
			});
			self.renderColumns();
			self.setCurrentView(view);
			self.feed();
			$('.right.column').html(view.render().el);

			if (!self.checkTutorial(self.user, 'profile')) {
				self.renderTutorial('profile');
			}
			self.triggerPage();
			self.stopLoading();
		}
	},
	
	renderTutorial: function(str) {
		var view = new Fauxble.Views.PagesTutorial({
			attr: this.attr,
			kind: str,
			element: $('#background')
		});
		$('#tutorial').html(view.render().el);
	},
	
	signInPopup: function() {
		var view = new Fauxble.Views.PopupsSignin({
			attr: this.attr,
			element: $('#background')
		});
		$('#tutorial').html(view.render().el);
	},
	
	fbSignInPopup: function() {
		var view = new Fauxble.Views.PopupsFbSignin({
			attr: this.attr,
			element: $('#background')
		});
		$('#tutorial').html(view.render().el);
	},
	
	thanksPopup: function() {
		var view = new Fauxble.Views.PopupsThanks({
			attr: this.attr,
			element: $('#background')
		});
		$('#tutorial').html(view.render().el);
	},
	
	startLoading: function() {
		var view = new Fauxble.Views.PagesLoading();
		this.load_view = view;
		$('#loading').removeClass('inactive');
		$('#loading').addClass('active');
		$('#loading').html(view.render().el);
	},
	
	stopLoading: function() {
		if (this.load_view) {
			this.load_view.remove();
			this.load_view.unbind();
			$('#loading').removeClass('active');
			$('#loading').addClass('inactive');
		}
	},
	
	generateRandomUsers: function() {
		var users = this.attr.users.where({signed_in_fb: true}),
			friends = [],
			length = 20,
			random_users = [],
			count = 0,
			self = this;
		
		for (u = 0; u < users.length; u++) {
			FB.api('/me/friends?access_token=' + users[u].get('encrypted_token'), function(response) {
				friends = friends.concat(response['data']);
				if (count === users.length - 1) {
					friends = _.shuffle(friends);
					
					if (friends.length < 20) {
						length = friends.length;
					}
					
					for (i = 0; i < length; i++) {
						if (random_users.indexOf({name: friends[i]['name'], uid: friends[i]['id']}) === -1 && !self.attr.users.where({uid: friends[i]['id']})[0]) {
							random_users.push({name: friends[i]['name'], uid: friends[i]['id']});
						} else {
							if (friends.length > length + 1) {
								length = length + 1;
							}
						}
					}
					
					for (a = 0; a < random_users.length; a++) {
						self.attr.users.create({
							name: random_users[a].name,
							uid: random_users[a].uid,
							signed_in_fb: true
						});
					}
					
					Backbone.history.navigate('', true);
				}
				count = count + 1;
			});
		}
	},
	
	generateRandomContent: function() {
		var issues = [],
			users,
			subset = [],
			challenge_num,
			num_users,
			length = 5,
			self = this;
		
		this.attr.issues.each(function(issue) {
			if (self.attr.questions.getNumQuestions(issue) > 3) {
				issues.push(issue);
			}
		});
		
		for (iss = 0; iss < issues.length; iss++) {
			users = this.attr.users.getFauxUsers(Math.round(Math.random() * 2) + 4);
			for (q = 0; q < users.length; q++) {
				challenge_num = Math.round(Math.ceil(self.attr.questions.getNumQuestions(issues[iss]) / 4) / 2);
				challenge_num = challenge_num * 100;
				for (c = 0; c < challenge_num; c++) {
					var user_index = 0;
					subset = _.shuffle(users);
					if (users[q].get('id') === subset[0].get('id')) {
						user_index = 1;
					}
					this.attr.challenges.create({
						challenger_id: users[q].get('id'),
						user_id: subset[user_index].get('id'),
						issue_id: issues[iss].get('id'),
						question_ids: this.attr.questions.getRandomIds(issues[iss], 4)
					}, {
						success: function(model, response) {
							self.attr.tasks.setRandoms(
								model, 
								self.attr.users.get(model.get('challenger_id')), 
								self.attr.users.get(model.get('user_id'))
							);
						},
						error: function(model, response) {
							
						}
					});
				}
			}
		}
	},
	
	generateRandomRanks: function() {
		var users = this.attr.users.where({signed_in_fb: true, provider: null}),
			self = this,
			rank,
			tasks,
			score;
		
		for (u = 0; u < users.length; u++) {
			this.attr.issues.each(function(issue) {
				tasks = self.attr.tasks.where({user_id: users[u].get('id'), issue_id: issue.get('id')});
				score = 0;
				
				for (t = 0; t < tasks.length; t++) {
					score = score + tasks[t].get('score');
				}
				
				if (!self.attr.ranks.where({user_id: users[u].get('id'), issue_id: issue.get('id')})[0]) {
					self.attr.ranks.create({
						user_id: users[u].get('id'),
						issue_id: issue.get('id'),
						score: score
					});
				} else {
					rank = self.attr.ranks.where({user_id: users[u].get('id'), issue_id: issue.get('id')})[0];
					
					if (!rank.get('score')) {
						rank.set({
							score: score
						});
					} else {
						rank.set({
							score: rank.get('score') + score
						});
					}
					
					rank.save();
				}
			});
		}	
	},
	
	pwnCameron: function() {
		//window.open('http://www.meatspin.com');
	}
});
