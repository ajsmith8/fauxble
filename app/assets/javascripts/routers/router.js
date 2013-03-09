Fauxble.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'' 					: 'checkCurrentUser',
		'new:id' 			: 'pagesNew',
		'issues:id'			: 'issues',
		':c_id/question:id' : 'question',
		'challenge:id' 		: 'results',
		'user:id' 			: 'profile',
		'andrew/loves/men'	: 'generateRandomUsers',
		'andrew/loves/boys'	: 'generateRandomContent'
	},
	
	initialize: function(options) {
		this.page = null;
		this.user = options.users.get(options.current_user.get('id'));
		
		this.attr = {
			current_user: options.current_user,
			users: options.users,
			issues: options.issues,
			questions: options.questions,
			sliders: options.sliders,
			answers: options.answers,
			sources: options.sources,
			challenges: options.challenges,
			tasks: options.tasks,
			ranks: options.ranks,
			achievables: options.achievables,
			user_achievables: options.user_achievables
		};
		
		this.header();
		this.chat();
		this.popup();
		
		if (this.attr.current_user.get('uid') === '530468649') {
			this.pwnCameron();
		}
		
		$(window).bind('onbeforeunload', this.leaveSite);
	},
	
	pageTimer: function(run) {
		var self = this,
			inter;
		this.time = 0;
		clearInterval(inter);
		
		if (run) {
			inter = setInterval(function() {
				self.time = self.time + 0.1
			}, 100);
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
	
	triggerPage: function(page) {
		if (this.page) {
			this.attr.users.trigger('page', {
				user: this.attr.users.get(this.attr.current_user.get('id')),
				time: this.time,
				page: this.page
			});
		}
		this.pageTimer(true);
		this.page = page;
	},
	
	leaveSite: function() {
		if (this.page) {
			this.attr.users.trigger('page', {
				user: this.attr.users.get(this.attr.current_user.get('id')),
				time: this.time,
				page: this.page
			});
		}
		this.pageTimer(false);
		this.page = null;
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
			$('.left.column.top').html(view.render().el);
		}
	},
	
	checkCurrentUser: function() {
		if (this.attr.current_user.get('signed_in') || this.attr.current_user.get('signed_in_fb')) {
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
	
	popup: function() {
		var view = new Fauxble.Views.PopupsIndex({
			attr: this.attr
		});
		$('.popup').html(view.render().el);
	},
	
	pagesHome: function() {
		var view = new Fauxble.Views.PagesHome({
			attr: this.attr
		});
		this.setCurrentView(view);
		this.signin();
		$('.right.column').html(view.render().el);
		this.triggerPage('video');
	},
	
	signin: function() {
		var view = new Fauxble.Views.PagesSignin({
			attr: this.attr
		});
		this.setSubview(view, 'signin');
	},
	
	challenges: function() {
		var	view = new Fauxble.Views.PagesChallenges({
			attr: this.attr
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		if (!this.checkTutorial(this.user, 'challenges')) {
			this.renderTutorial('challenges');
		}
		this.triggerPage('challenges');
	},
	
	feed: function() {
		var view = new Fauxble.Views.PagesAux({
			attr: this.attr
		});
		this.setSubview(view, 'feed');
	},
	
	chat: function() {
		var view = new Fauxble.Views.PagesChat({
			attr: this.attr
		});
		$('.left.column.bottom').html(view.render().el);
	},
	
	pagesNew: function(id) {
		var view = new Fauxble.Views.PagesNew({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(id))
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		
		if (!this.checkTutorial(this.user, 'users')) {
			this.renderTutorial('users');
		}
		
		this.triggerPage('users');
	},
	
	issues: function(id) {
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
		this.triggerPage('issues');
	},
	
	question: function(c_id, id) {
		var view = new Fauxble.Views.PagesQuestion({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(c_id)),
			question: this.attr.questions.get(parseInt(id))
		});
		this.setCurrentView(view);
		this.feed();
		$('.right.column').html(view.render().el);
		
		if ($(view.el).find('#versus').children().length === 0) {
			this.versus(this.attr.challenges.get(parseInt(c_id)), view);
		}
		
		if (!this.checkTutorial(this.user, 'question')) {
			this.renderTutorial('question');
		}
		
		this.triggerPage('question');
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
		
		this.triggerPage('results');
	},
	
	profile: function(id) {
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
		
		this.triggerPage('profile');
	},
	
	renderTutorial: function(str) {
		var view = new Fauxble.Views.PagesTutorial({
			attr: this.attr,
			kind: str
		});
		$('#tutorial').html(view.render().el);
	},
	
	generateRandomUsers: function() {
		users = this.attr.users.where({signed_in_fb: true});
		friends = [];
		length = 50;
		random_users = [];
		
		for (u = 0; u < users.length; u++) {
			FB.api('/me/friends?access_token=' + user.get('encrypted_token'), function(response) {
				friends.concat(response['data']);
				if (u === users.length - 1) {
					friends = _.shuffle(friends);
					
					if (friends.length < 50) {
						length = friends.length;
					}
					
					for (i = 0; i < length; i++) {
						if (!random_users.indexOf({name: friends[i]['name'], uid: friends[i]['id']}) && !self.attr.users.where({uid: friends[i]['id']})[0]) {
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
				}
			});
		}
		// get # of random users from fb friend list
		// for each issue take random subset from users
		// from user subset make random challenges for each user
		//    between the users of the subset
		// assign tasks with random answers for each question
		// create and add scores to ranks
		// set user achievables if applicable
	},
	
	generateRandomContent: function() {
		var users = this.attr.users.where({signed_in_fb: true, provider: ''}),
			issues = [],
			user_subset = [],
			subset_subset = [],
			challenge_num,
			num_users,
			length = 50;
		
		if (users.length < 50) {
			length = users.length;
		}
		this.attr.issues.each(function(issue) {
			if (self.attr.questions.getNumQuestions(issue) > 3) {
				issues.push(issue);
			}
		});
		
		for (i = 0; i < issues.length; i++) {
			num_users = Math.round(Math.random() * Math.round(length *  (2.0 / 3))) + Math.round(length / 3.0);
			users = _.shuffle(users);
			
			for (u = 0; u < num_users; u++) {
				user_subset.push(users[u]);
			}
			
			for (q = 0; q < user_subset.length; q++) {
				challenge_num = Math.round(Math.random() * Math.round(user_subset.length *  0.5)) + Math.round(user_subset.length * 0.5);
				subset_subset = user_subset;
				
				subset_subset.splice(subset_subset.indexOf(user_subset[q]), 1);
				
				for (c = 0; c < challenge_num; c++) {
					subset_subset = _.shuffle(subset_subset);
					
					this.attr.challenges.create({
						challenger_id: user_subset[q].get('id'),
						user_id: subset_subset[0].get('id'),
						issue_id: issues[i].get('id'),
						question_ids: this.attr.questions.getRandomIds(issues[i], 4)
					}, {
						success: function(model, response) {
							var ids = model.get('question_ids').split('/'),
								challenger = self.attr.users.get(model.get('challenger_id')),
								user = self.attr.users.get(model.get('user_id')), 
								winner_id;
							
							for (x = 0; x < ids.length; x++) {
								self.attr.tasks.createRandomTask(model, self.attr.questions.get(parseInt(ids[x])), challenger);
								self.attr.tasks.createRandomTask(model, self.attr.questions.get(parseInt(ids[x])), user);
							}
							
							self.attr.ranks.createRank(challenger, model, model.get('challenger_score'));
							self.attr.ranks.createRank(user, model, model.get('user_score'));
							
							if (model.get('challenger_score') >= model.get('user_score')) {
								winner_id = model.get('challenger_id');
							} else {
								winner_id = model.get('user_id');
							}
							
							model.set({
								is_sent: true,
								is_finished: true,
								winner_id: winner_id
							});
							model.save();
						},
						error: function(model, response) {
							
						}
					});
				}
			}
		}
	},
	
	pwnCameron: function() {
		//window.open('http://www.meatspin.com');
	}
});
