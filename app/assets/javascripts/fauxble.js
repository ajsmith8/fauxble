window.Fauxble = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	
	initialize: function(data) {
		window.facts_question 	= false;
		window.like				= true;
		window.start_time		= new Date().getTime() / 1000;
		window.scramble 		= makeid(8);
		this.facts_learned 		= data.facts_learned;
		
		this.current_user 		= new Fauxble.Models.User(data.current_user);
		this.issues 			= new Fauxble.Collections.Issues(data.issues);
		this.sliders 			= new Fauxble.Collections.Sliders(data.sliders);
		this.answers 			= new Fauxble.Collections.Answers(data.answers);
		this.questions 			= new Fauxble.Collections.Questions(data.questions, {
			sliders: this.sliders,
			answers: this.answers
		});
		this.sources 			= new Fauxble.Collections.Sources(data.sources);
		this.comments			= new Fauxble.Collections.Comments(data.comments);
		this.tasks 				= new Fauxble.Collections.Tasks(data.tasks, {
			questions: this.questions,
			sliders: this.sliders,
			answers: this.answers
		});
		this.challenges 		= new Fauxble.Collections.Challenges(data.challenges, {
			issues: this.issues,
			questions: this.questions,
			tasks: this.tasks
		});
		this.ranks 				= new Fauxble.Collections.Ranks(data.ranks);
		this.users 				= new Fauxble.Collections.Users(data.users, {
			challenges: this.challenges,
			ranks: this.ranks
		});
		this.user_achievables 	= new Fauxble.Collections.UserAchievables(data.user_achievables);
		this.achievables 		= new Fauxble.Collections.Achievables(data.achievables, {
			tasks: this.tasks,
			users: this.users,
			challenges: this.challenges,
			issues: this.issues,
			user_achievables: this.user_achievables
		});
		this.feedbacks			= new Fauxble.Collections.Feedbacks();
		
		this.router = new Fauxble.Routers.Router({
			facts_learned: 		this.facts_learned,
			current_user: 		this.current_user,
			users: 				this.users,
			issues: 			this.issues,
			questions: 			this.questions,
			sliders: 			this.sliders,
			answers: 			this.answers,
			sources: 			this.sources,
			comments: 			this.comments,
			challenges: 		this.challenges,
			tasks: 				this.tasks,
			ranks: 				this.ranks,
			achievables: 		this.achievables,
			user_achievables: 	this.user_achievables,
			feedbacks: 			this.feedbacks
		});
		
		Backbone.history.start();
	}
};

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0 ; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	
    return text;
}

function gaCustomVar(index, name, value, scope) {
	//_gaq.push(['_setCustomVar', index, name, value, scope]);
}

function gaEvent(category, action, label, value) {
	//_gaq.push(['_trackEvent', category, action, label, value]);
}

function gaPageview(url, user) {
	var time = new Date().getTime() / 1000;
		id = 0;
	
	if (user) {
		id = user.get('id');
	}
	
	gaEvent('Page View', url, id, Math.round(time - window.start_time));
	
	//_gaq.push(['_trackPageview', "/" + url]);
}

function fbLogin() {
	window.location = "http://localhost:3000/auth/facebook";
	//window.location = "http://salty-lowlands-9089.herokuapp.com/auth/facebook";
	//window.location = "http://fusegap.org/auth/facebook";
}