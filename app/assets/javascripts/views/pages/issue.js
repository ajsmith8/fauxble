Fauxble.Views.PagesIssue = Backbone.View.extend({
	
	template: JST['pages/issue'],
	
	events: {
		'click #user_check' : 'checkUser',
		'click #share' : 'fbShare'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.ids = this.attr.tasks.getIssueFactsAndUsers(this.issue);
		this.users = [];
		this.comments = this.attr.comments.where({issue_id: this.issue.get('id'), ancestry: null});
		
		for (var i = this.ids.length; i > 0; i--) {
			var user = this.attr.users.get(parseInt(this.ids[i - 1].split('/')[0]));
			
			if (this.users.indexOf(user) === -1) {
				this.users.push(user);
			}
		}
		
		this.subviews = [];
		
		this.attr.users.trigger('scope');
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template({
			issue: this.issue,
			facts: this.attr.questions.getNumQuestions(this.issue),
			learned: this.ids.length,
			users: this.users.length
		}));
		
		setTimeout(function() {
			//self.renderCommunity();
			self.renderComments();
		}, 0);
		
		return this;
	},
	
	renderCommunity: function() {
		var users = this.users;
		
		for (var u = users.length; u > 0; u--) {
			this.appendUser(users[u - 1]);
		}
	},
	
	appendUser: function(user) {
		var view = new Fauxble.Views.UsersCommunity({
			attr: this.attr,
			user: user
		});
		this.subviews.push(view);
		$('#community').append(view.render().el);
	},
	
	renderComments: function() {
		var view = new Fauxble.Views.CommentsIndex({
			attr: this.attr,
			comments: this.comments,
			issue: this.issue
		});
		this.subviews.push(view);
		$(this.el).find('#comments').html(view.render().el);
	},
	
	checkUser: function() {
		if (this.user && (this.user.get('signed_in') || this.user.get('signed_in_fb'))) {
			Backbone.history.navigate('challenges', true);
		} else {
			window.Fauxble.router.signInPopup();
		}
	},
	
	fbShare: function() {
		var user = this.user,
			issue = this.issue;
		
		gaEvent('Share', 'Issue', 'Clicked', null);
		
		if (!!user.get('uid')) {
			var obj = { 
				method: 'feed', 
				link: 'http://fusegap.org/#issue/' + issue.get('url'), 
				name: 'fuseGap', 
				to: user.get('uid'),
				picture: 'http://fusegap.org/assets/issues/' + issue.get('image') + '.png', 
				description: 'Check out ' + issue.get('title') + ' on fuseGap.org!'
			};
			function callback(response) 
			{
				if (response) {
					gaEvent('Share', 'Issue', String(user.get('id')), null);
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