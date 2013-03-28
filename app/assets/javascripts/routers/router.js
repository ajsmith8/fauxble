Fauxble.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'' 					: 'checkCurrentUser',
		'about'				: 'about',
		'mfc'				: 'mfc',
		'new:id' 			: 'pagesNew',
		'issues:id'			: 'issueSelect',
		'issue:id'			: 'issue',
		'issue/list'		: 'issues',
		':c_id/question:id' : 'question',
		'challenge:id' 		: 'results',
		'user:id' 			: 'profile',
		
		'random/content/users'		: 'generateRandomUsers',
		'random/content/challenges'	: 'generateRandomContent',
		'random/content/ranks'		: 'generateRandomRanks', 
	},
	
	initialize: function(options) {
		this.user = options.users.get(options.current_user.get('id'));
		this.columns = false;
		this.facts_learned = 4000;
		
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
			feedbacks: options.feedbacks
		};
		
		this.header();
		this.footer();
		this.feedbackTab();
		this.chat();
		this.popup();
		
		if (this.attr.current_user.get('uid') === '530468649') {
			this.pwnCameron();
		}
		
		this.attr.tasks.on('reset', this.setFactsLearned, this);
		
		this.bind('all', this._trackPageview);
	},
	
	_trackPageview: function() {
		var url = Backbone.history.getFragment();
		
		if (url.split('new').length > 1) {
			url = 'new';
		}
		
		if (url.split('issue').length > 1) {
			if (url.split('issues').length > 1) {
				url = 'issues';
			} else {
				url = 'issue';
			}
		}
		
		if (url.split('challenge').length > 1) {
			url = 'challenge';
		}
		
		if (url.split('question').length > 1) {
			url = 'question';
		}
		
		if (url.split('user').length > 1) {
			url = 'user';
		}
		
	    gaPageview(url);
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
			this.challenges();
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
	
	feedbackTab: function() {
		var view = new Fauxble.Views.FeedbacksTab({
			attr: this.attr
		});
		$('.feedback').html(view.render().el);
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
		var left = new Fauxble.Views.MfcLeft({
			attr: this.attr,
			facts: this.facts_learned
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
		this.columns = false;
		this.subview = null;
		this.str = '';
		var view = new Fauxble.Views.PagesPreview({
			attr: this.attr
		});
		this.setCurrentView(view);
		$('.test').empty();
		$('.page').html(view.render().el);
		this.triggerPage();
	},
	
	issue: function(id) {
		this.renderColumns();
		var view = new Fauxble.Views.PagesIssue({
			attr: this.attr,
			issue: this.attr.issues.get(parseInt(id))
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		
		this.triggerPage();
	},
	
	question: function(c_id, id) {
		this.renderColumns();
		var question = this.attr.questions.get(parseInt(id));
		var view = new Fauxble.Views.PagesQuestion({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(c_id)),
			question: question
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		
		if ($(view.el).find('#versus').children().length === 0) {
			this.versus(this.attr.challenges.get(parseInt(c_id)), view);
		}
		
		if (question.get('is_slider')) {
			if (!this.checkTutorial(this.user, 'slider')) {
				this.renderTutorial('slider');
			}
		} else {
			if (!this.checkTutorial(this.user, 'answers')) {
				this.renderTutorial('answers');
			}
		}
		this.triggerPage();
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
		this.renderColumns();
		var view = new Fauxble.Views.PagesResults({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(id))
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		
		if ($(view.el).find('#versus').children().length === 0) {
			this.versus(this.attr.challenges.get(parseInt(id)), view);
		}
		
		if (!this.checkTutorial(this.user, 'results')) {
			this.renderTutorial('results');
		}
		this.triggerPage();
	},
	
	profile: function(id) {
		this.renderColumns();
		var view = new Fauxble.Views.PagesProfile({
			attr: this.attr,
			user: this.attr.users.get(parseInt(id))
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		
		if (!this.checkTutorial(this.user, 'profile')) {
			this.renderTutorial('profile');
		}
		this.triggerPage();
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
	
	setFactsLearned: function(tasks) {
		var users = this.attr.users.getSignedInUsers(),
			questions = this.attr.questions.toArray(),
			facts = 0;
	
		for (u = 0; u < users.length; u++) {
			if (tasks.where({user_id: users[u].get('id')})[0]) {
				for (q = 0; q < questions.length; q++) {
					if (tasks.where({user_id: users[u].get('id'), question_id: questions[q].get('id')})[0]) {
						facts = facts + 1;
					}
				}
			}
		}
		
		this.facts_learned = facts + 4000;
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
