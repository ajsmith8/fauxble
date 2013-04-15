Fauxble.Views.CommentsIndex = Backbone.View.extend({
	
	id: 'comments_index',
	
	template: JST['comments/index'],
	
	events: {
		'click #add_comment' : 'checkUser',
		'submit #new_comment' : 'newComment'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.comments = options.comments;
		this.issue = options.issue;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		if (this.user) {
			//this.rank = this.attr.users.getGlobalRank(this.user);
			this.facts = this.attr.tasks.getFactsLearned(this.user);
		}
		
		this.subviews = [];
		
		this.attr.comments.on('add', this.renderCount, this);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template({
			user: this.user,
			rank: this.rank,
			facts: this.facts,
			count: this.count
		}));
		
		setTimeout(function() {
			self.renderCount();
			for (var c = 0, len = self.comments.length; c < len; c++) {
				self.renderComment(self.comments[c]);
			}
		}, 0);
		
		return this;
	},
	
	renderCount: function() {
		var count = this.attr.comments.where({issue_id: this.issue.get('id')}).length,
			text;
		
		if (count === 1) {
			text = count + ' comment';
		} else {
			text = count + ' comments';
		}
				
		$(this.el).find('#comment_count').html(text);
	},
	
	renderComment: function(comment) {
		var view = new Fauxble.Views.CommentsShow({
			attr: this.attr,
			comment: comment
		});
		this.subviews.push(view);
		$(this.el).append(view.render().el);
	},
	
	checkUser: function() {
		if (this.user && this.user.signedIn()) {
			this.showAdd();
		} else {
			Fauxble.router.signInPopup();
		}
	},
	
	showAdd: function() {			
		$(this.el).find('#add_comment').addClass('hide');
		$(this.el).find('#add_form').removeClass('hide');
	},
	
	newComment: function(event) {
		event.preventDefault();
		var title = $('#new_comment').find('textarea#title').val();
		
		//start loading
		this.attr.comments.createComment(title, this.user, this.issue, null, this);
	},
	
	emptyInput: function() {
		$('#new_comment').find('textarea#title').val('');
		$(this.el).find('#add_form').addClass('hide');
		$(this.el).find('#add_comment').removeClass('hide');
	},
	
	onClose: function() {
		var views = this.subviews;
		
		this.attr.comments.unbind('add', this.renderCount);
		
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
