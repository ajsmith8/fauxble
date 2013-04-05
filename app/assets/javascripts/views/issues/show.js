Fauxble.Views.IssuesShow = Backbone.View.extend({
	
	template: JST['issues/show'],
	
	events: {
		'click #learn' : 'toggleDescription',
		'click .user' : 'userProfile',
		'click #issue' : 'issueShow'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.challenge = options.challenge;
		this.num_questions = options.num_questions;
		this.count = options.count;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).attr('id', this.issue.get('id'));
		$(this.el).addClass('issue');
		if (this.count % 2 === 0) {
			$(this.el).addClass('light');
		} else {
			$(this.el).addClass('dark');
		}
		$(this.el).html(this.template({
			issue: this.issue,
			num_questions: this.num_questions
		}));
		setTimeout(function() {
			self.renderUser(self.challenge.get('user_id'), self.challenge.get('challenger_id'), $(self.el).find('#user'));
			self.renderUser(self.challenge.get('challenger_id'), self.challenge.get('user_id'), $(self.el).find('#challenger'));
		}, 0);
		return this;
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
		var element = $(event.target).closest('.issue').find('#description');
		
		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
		} else {
			$(element).addClass('hide');
		}
	},
	
	userProfile: function(event) {
		var element = $(event.target).closest('.user'),
			user = this.attr.users.get(parseInt($(element).attr('id')));
		
		user.show();
	},
	
	issueShow: function() {
		this.issue.show();
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