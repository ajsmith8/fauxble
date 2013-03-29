Fauxble.Views.ChallengesShow = Backbone.View.extend({

	events: {
		'click #learn' : 'toggleDescription',
		'click #play' : 'startChallenge',
		'click .user' : 'userProfile'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.issue = this.attr.issues.get(this.challenge.get('issue_id'));
		this.is_sent = options.is_sent;
		this.count = options.count;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		
		$(this.el).attr('id', this.challenge.get('id'));
		$(this.el).addClass('challenge');
		if (this.is_sent) {
			$(this.el).html(JST['challenges/sent']);
			if (this.count % 2 === 0) {
				$(this.el).addClass('dark');
			} else {
				$(this.el).addClass('light');
			}
		} else {
			$(this.el).html(JST['challenges/recieved']);
			if (this.count % 2 === 0) {
				$(this.el).addClass('dark-alt');
			} else {
				$(this.el).addClass('light');
			}
		}
		
		setTimeout(function() {
			self.renderIssue();
			self.renderUser(self.challenge.get('challenger_id'), self.challenge.get('user_id'), $(self.el).find('#challenger'));
			self.renderUser(self.challenge.get('user_id'), self.challenge.get('challenger_id'), $(self.el).find('#user'));
		}, 0);
		
		return this;
	},
	
	renderIssue: function() {
		var view = new Fauxble.Views.IssuesChallenge({
			attr: this.attr,
			issue: this.issue
		});
		this.subviews.push(view);
		$(this.el).find('#issue').html(view.render().el);
	},
	
	renderUser: function(id1, id2, element) {
		var view = new Fauxble.Views.UsersIssue({
			attr: this.attr,
			user_id1: id1,
			user_id2: id2,
			issue: this.issue
		});
		this.subviews.push(view);
		$(element).html(view.render().el);
	},
	
	toggleDescription: function(event) {
		var element = $(event.target).closest('.challenge').find('#description');
		
		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
		} else {
			$(element).addClass('hide');
		}
	},
	
	startChallenge: function() {
		console.log('views/challenges/show/startChallenge init ' + window.timer);
		Backbone.history.navigate(this.challenge.get('id') + '/question' + this.challenge.get('question_ids').split('/')[0], true);
	},
	
	userProfile: function(event) {
		var element = $(event.target).closest('.user');
		
		Backbone.history.navigate('user' + $(element).attr('id'), true);
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