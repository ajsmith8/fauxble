Fauxble.Views.UsersIssue = Backbone.View.extend({
	
	template: JST['users/issue'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.user = this.attr.users.get(options.user_id1);
		this.user2 = this.attr.users.get(options.user_id2);
		this.subviews = [];
		
		this.attr.users.on('reset', this.render, this);
	},
	
	render: function() {
		var self = this;
		$(this.el).attr('id', this.user.get('id'));
		$(this.el).addClass('user issue');
		$(this.el).html(this.template({
			user: this.user,
			wins: this.attr.challenges.getWins(this.user, this.user2, this.issue)
		}));
		
		setTimeout(function() {
			self.renderRank();
		}, 0);
		
		return this;
	},
	
	renderRank: function() {
		var view = new Fauxble.Views.RanksIssue({
			attr: this.attr,
			issue: this.issue,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#rank').html(view.render().el);
	},
	
	onClose: function() {
		var views = this.subviews;	
		
		this.attr.users.unbind('reset', this.render);
			
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