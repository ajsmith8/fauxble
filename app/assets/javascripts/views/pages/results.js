Fauxble.Views.PagesResults = Backbone.View.extend({
	
	template: JST['pages/results'],

	events: {
		'click #finish' : 'sendOrFinish',
		'click #here' : 'sidecar'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.question_ids = this.challenge.get('question_ids').split('/');
		this.time = 650;
		this.questions = [];
		this.subviews = [];
		for (i = 0; i < this.question_ids.length; i++) {
			this.questions.push(this.attr.questions.get(parseInt(this.question_ids[i])));
		}
		
		this.attr.users.trigger('scope');
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			is_finished: this.challenge.get('is_finished'),
			header: this.getHeaderText(),
			challenge: this.challenge
		}));
		
		setTimeout(function() {
			self.showResults();
		}, 0);
		
		return this;
	},
	
	renderResult: function(question) {
		var view = new Fauxble.Views.QuestionsResult({
			attr: this.attr,
			challenge: this.challenge,
			question: question
		});
		this.subviews.push(view);
		$(this.el).find('#results').append(view.render().el);
	},
	
	showResults: function() {
		var self = this,
			count = 0,
			inter;

		inter = setInterval(function() {
			self.renderResult(self.questions[count]);
			count = count + 1;
			if (count >= self.questions.length) {
				clearInterval(inter);
			}
		}, self.time);
		
		this.showButton(self.time * (this.questions.length + 1));
	},
	
	showButton: function(time) {
		var self = this;
		
		setTimeout(function() {
			$(self.el).find('#finish').removeClass('hide');
			$(self.el).find('#result_text').removeClass('invis');
		}, time);
	},
	
	getHeaderText: function() {
		if (this.challenge.get('is_finished')) {
			if (this.challenge.get('winner_id') === this.challenge.get('user_id')) {
				return 'You Won!';
			} else {
				return 'You Lost...';
			}
		} else {
			return 'Waiting...';
		}
	},
	
	sendOrFinish: function() {
		if (this.challenge.get('is_finished')) { //prevent replies to default challenges
			//start loading
			
			if (this.challenge.get('challenger_id') === 1) {
				Backbone.history.navigate('', true);
			} else {
				this.attr.challenges.createChallenge(
					this.attr.users.get(this.challenge.get('user_id')), 
					this.attr.users.get(this.challenge.get('challenger_id'))
				);
			}
		} else {
			this.fbPopup(
				this.attr.users.get(this.challenge.get('user_id')), 
				this.attr.users.get(this.challenge.get('challenger_id')), 
				this.attr.issues.get(this.challenge.get('issue_id'))
			);
		}
	},
	
	fbPopup: function(user, challenger, issue) {
		if (Boolean(user.get('uid')) && challenger.get('signed_in_fb')) {
			var obj = { 
				method: 'feed', 
				link: 'http://fusegap.org', 
				name: 'fuseGap', 
				to: user.get('uid'), 
				from: challenger.get('uid'),
				description: challenger.get('name') + ' has challenged your knowledge of ' + '<b>' + issue.get('title') + '</b>' + ', think you can beat them?'
			};
			function callback(response) 
			{
				Backbone.history.navigate('', true);
	        }
			FB.ui(obj, callback);
		} else {
			Backbone.history.navigate('', true);
		}
	},
	
	sidecar: function() {
		window.open('http://us4.campaign-archive1.com/?u=f796d9cc4b2b1918b21fa8f53&id=822bc10003&e=de126c62bb', '_blank');
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