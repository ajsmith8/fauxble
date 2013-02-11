Fauxble.Routers.Router = Backbone.Router.extend({
	
	routes: {
		'' 					: 'checkCurrentUser',
		'new:id' 			: 'pagesNew',
		'issues:id'			: 'issues',
		':c_id/question:id' : 'question',
		'challenge:id' 		: 'results',
		'user:id' 			: 'profile'
	},
	
	initialize: function(options) {
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
		
		this.metrics = {
			pages: options.page_metrics,
			users: options.user_metrics
		};
	},
	
	pageTimers: function() {
		
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
	
	setSubview: function(view) {
		//only render subview if it doesn't exist or is different from
		//current subview
		if (this.subview) {
			this.subview.remove();
			this.subview.unbind();
			
			if (this.subview.onClose) {
				this.subview.onClose();
			}
		}
		
		this.subview = view;
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
		this.setCurrentView(view);
		$('.header').html(view.render().el);
	},
	
	pagesHome: function() {
		var view = new Fauxble.Views.PagesHome({
			attr: this.attr,
			metrics: this.metrics
		});
		this.setCurrentView(view);
		this.signin();
		$('.right.column').html(view.render().el);
	},
	
	signin: function() {
		var view = new Fauxble.Views.PagesSignin({
			attr: this.attr
		});
		this.setSubview(view);
		$('.left.column').html(view.render().el);
	},
	
	challenges: function() {
		var view = new Fauxble.Views.PagesChallenges({
			attr: this.attr,
			metrics: this.metrics
		});
		this.setCurrentView(view);
		$('.right.column').html(view.render().el);
	},
	
	info: function() {
		var view = new Fauxble.Views.PagesInfo({
			attr: this.attr
		});
		this.setSubview(view);
		$('.left.column').html(view.render().el);
	},
	
	pagesNew: function(id) {
		var view = new Fauxble.Views.PagesNew({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(id)),
			metrics: this.metrics
		});
		this.setCurrentView(view);
		$('.right.column').html(view.render().el);
	},
	
	issues: function(id) {
		var view = new Fauxble.Views.PagesIssues({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(id)),
			metrics: this.metrics
		});
		this.setCurrentView(view);
		$('.right.column').html(view.render().el);
	},
	
	question: function(c_id, id) {
		var view = new Fauxble.Views.PagesQuestion({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(c_id)),
			question: this.attr.questions.get(parseInt(id)),
			metrics: this.metrics
		});
		this.setCurrentView(view);
		$('.right.column').html(view.render().el);
		
		if ($(view.el).find('#versus').children().length === 0) {
			this.versus(this.attr.challenges.get(parseInt(id)), view);
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
		var view = new Fauxble.Views.PagesResults({
			attr: this.attr,
			challenge: this.attr.challenges.get(parseInt(id)),
			metrics: this.metrics
		});
		this.setCurrentView(view);
		$('.right.column').html(view.render().el);
	},
	
	profile: function(id) {
		var view = new Fauxble.Views.PagesProfile({
			attr: this.attr,
			user: this.attr.users.get(parseInt(id)),
			metrics: this.metrics
		});
		this.setCurrentView(view);
		$('.right.column').html(view.render().el);
	}
});
