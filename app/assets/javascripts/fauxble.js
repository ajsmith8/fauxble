window.Fauxble = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	
	initialize: function(data) {
		this.users 				= new Fauxble.Collections.Users(data.users);
		this.current_user 		= new Fauxble.Models.User(data.current_user);
		this.issues 			= new Fauxble.Collections.Issues(data.issues);
		this.questions 			= new Fauxble.Collections.Questions(data.questions);
		this.sliders 			= new Fauxble.Collections.Sliders(data.sliders);
		this.answers 			= new Fauxble.Collections.Answers(data.answers);
		this.sources 			= new Fauxble.Collections.Sources(data.sources);
		this.challenges 		= new Fauxble.Collections.Challenges(data.challenges);
		this.tasks 				= new Fauxble.Collections.Tasks(data.tasks);
		this.ranks 				= new Fauxble.Collections.Ranks(data.ranks);
		this.user_achievables 	= new Fauxble.Collections.UserAchievables(data.user_achievables);
		this.achievables 		= new Fauxble.Collections.Achievables(data.achievables, {
			tasks: this.tasks,
			users: this.users,
			challenges: this.challenges,
			issues: this.issues,
			user_achievables: this.user_achievables
		});
		this.page_metrics 		= new Fauxble.Collections.PageMetrics();
		this.user_metrics 		= new Fauxble.Collections.UserMetrics();
		
		new Fauxble.Routers.Router({
			current_user: 		this.current_user,
			users: 				this.users,
			issues: 			this.issues,
			questions: 			this.questions,
			sliders: 			this.sliders,
			answers: 			this.answers,
			sources: 			this.sources,
			challenges: 		this.challenges,
			tasks: 				this.tasks,
			ranks: 				this.ranks,
			achievables: 		this.achievables,
			user_achievables: 	this.user_achievables,
			page_metrics: 		this.page_metrics,
			user_metrics: 		this.user_metrics
		});
		
		Backbone.history.start();
	}
};
