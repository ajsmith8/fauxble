window.Fauxble = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	
	initialize: function(data) {
		// misc variables (window object is available from anywhere)
		window.challenge_id		= null;
		window.facts_question 	= false;
		window.like				= true;
		window.start_time		= new Date().getTime() / 1000;
		
		// initializing all of the collections
		this.current_user 		= new Fauxble.Models.User(data.current_user);
		this.users 				= new Fauxble.Collections.Users(data.users);
		this.challenges 		= new Fauxble.Collections.Challenges(data.challenges);
		this.issues 			= new Fauxble.Collections.Issues(data.issues);
		this.questions 			= new Fauxble.Collections.Questions(data.questions);
		this.sliders 			= new Fauxble.Collections.Sliders();
		this.answers 			= new Fauxble.Collections.Answers();
		this.sources 			= new Fauxble.Collections.Sources();
		this.comments			= new Fauxble.Collections.Comments();
		this.tasks 				= new Fauxble.Collections.Tasks();
		this.ranks 				= new Fauxble.Collections.Ranks();
		this.user_achievables 	= new Fauxble.Collections.UserAchievables(data.user_achievables);
		this.achievables 		= new Fauxble.Collections.Achievables(data.achievables);
		this.feedbacks			= new Fauxble.Collections.Feedbacks();
		this.events 			= new Fauxble.Collections.Events();
		
		// start the router with all the collections
		this.router = new Fauxble.Routers.Router({
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
			feedbacks: 			this.feedbacks,
			events: 			this.events 
		});
		
		Backbone.history.start();
	}
};

// this isnt used anymore but note the format
// function name(options) {} is standard javascript
// where
// name: function(options) {} is standard backbone.js
//
// functions like the ones below can be referenced from anywhere in the javascript
function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0 ; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	
    return text;
}

// google analytics functions I put here to keep all
// code that had to change from development to production
// in one file
function gaCustomVar(index, name, value, scope) {
	//_gaq.push(['_setCustomVar', index, name, value, scope]);
}

function gaEvent(category, action, label, value) {
	//_gaq.push(['_trackEvent', category, action, label, value]);
}

function gaPageview(url, user) {
	var time = new Date().getTime() / 1000;
		id = 0;
	
	url = formatUrl(url);
	
	if (user) {
		id = user.get('id');
	}
	
	gaEvent('Page View', url, id, Math.round(time - window.start_time));
	
	//_gaq.push(['_trackPageview', "/" + url]);
}

// login and signout so I only had
// to change the urls once
function fbLogin() {
	window.location = "http://localhost:3000/auth/facebook";
	//window.location = "http://salty-lowlands-9089.herokuapp.com/auth/facebook";
	//window.location = "http://fusegap.org/auth/facebook";
}

function signout() {
	window.location = 'http://localhost:3000/signout';
	//window.location = 'http://salty-lowlands-9089.herokuapp.com/signout';
	//window.location = 'http://fusegap.org/signout';
}

//formats urls for google analytics to limit the pages
// ie: question1234/this-is-a-question becomes just question
function formatUrl(url) {
	var split = url.split('/');
	
	if (split.length > 1) {
		if (split[1] !== 'select') {
			url = split[0];
		}
	}
	
	return url.replace(/[0-9]/g, '');
}