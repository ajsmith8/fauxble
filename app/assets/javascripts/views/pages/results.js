Fauxble.Views.PagesResults = Backbone.View.extend({
	
	template: JST['pages/results'],

	events: {
		'click #finish' : 'sendOrFinish',
		'click #share' : 'fbShare',
		'click #here' : 'sidecar'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
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
			$(self.el).find('#share').removeClass('hide');
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
				this.homePage();
			} else {
				this.attr.challenges.createChallenge(
					this.attr.users.get(this.challenge.get('user_id')), 
					this.attr.users.get(this.challenge.get('challenger_id'))
				);
			}
		} else {
			/*this.fbPopup(
				this.attr.users.get(this.challenge.get('user_id')), 
				this.attr.users.get(this.challenge.get('challenger_id')), 
				this.attr.issues.get(this.challenge.get('issue_id'))
			);*/
			this.homePage();
		}
	},
	
	fbShare: function() {
		var user = this.user,
			issue = this.attr.issues.get(this.challenge.get('issue_id'));
		
		gaEvent('Share', 'Results', 'Clicked', null);
		
		if (user.get('uid')) {
			var obj = { 
				method: 'feed', 
				link: 'http://fusegap.org', 
				name: 'fuseGap', 
				to: user.get('uid'),
				picture: 'http://fusegap.org/assets/logos/blue_70.png', 
				description: issue.get('title') + ': I\'ve got the facts!'
			};
			function callback(response) 
			{
				if (response) {
					gaEvent('Share', 'Results', String(user.get('id')), null);
					window.Fauxble.router.thanksPopup();
				} else {
					//close
				}
	        }
			FB.ui(obj, callback);
		} else {
			window.Fauxble.router.fbSignInPopup();
		}
	},
	
	sidecar: function() {
		window.open('http://us4.campaign-archive1.com/?u=f796d9cc4b2b1918b21fa8f53&id=822bc10003&e=de126c62bb', '_blank');
	},

	homePage: function() {
		if (this.user) {
			Backbone.history.navigate('challenges', true);
		} else {
			Backbone.history.navigate('', true);
		}
	},
	
	onClose: function() {
		var views = this.subviews;
		
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