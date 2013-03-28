Fauxble.Views.CommentsShow = Backbone.View.extend({
	
	template: JST['comments/show'],
	
	events: {
		'click #reply_button' : 'toggleReply',
		'submit #comment_reply' : 'commentReply'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.comment = options.comment;
		this.commentor = this.attr.users.get(this.comment.get('user_id'));
		this.issue = this.attr.issues.get(this.comment.get('issue_id'));
		this.comments = this.getChildren(this.comment);
		this.rank = this.attr.users.getGlobalRank(this.commentor);
		this.facts = this.attr.tasks.getFactsLearned(this.commentor);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).addClass('comment');
		$(this.el).attr('id', this.comment.get('id'));
		$(this.el).html(this.template({
			comment: this.comment,
			user: this.commentor,
			rank: this.rank,
			facts: this.facts
		}));
		
		setTimeout(function() {
			self.renderChildren();
		}, 0);
		
		return this;
	},
	
	renderChildren: function() {
		for (var c = 0; c < this.comments.length; c++) {
			this.renderComment(this.comments[c]);
		}
	},
	
	renderComment: function(comment) {
		var view = new Fauxble.Views.CommentsShow({
			attr: this.attr,
			comment: comment
		});
		$(this.el).find('#children').append(view.render().el);
	},
	
	toggleReply: function() {
		var element = $(this.el).find('#reply');
		
		if ($(element).hasClass('hide')) {
			$(element).removeClass('hide');
		} else {
			$(element).addClass('hide');
		}
	},
	
	commentReply: function(event) {
		event.preventDefault();
		var title = $(this.el).find('input#title').val();
		
		if (this.user.signedIn()) {
			//start loading
			this.attr.comments.createComment(title, this.user, this.issue, this.comment, this);
		} else {
			alert('You must be signed in to comment');
		}
	},
	
	getChildren: function(comment) {
		var ancestry = comment.get('ancestry');
			
		if (!ancestry) {
			ancestry = String(comment.get('id'));
		} else {
			ancestry = ancestry + '/' + comment.get('id');
		}
		
		return this.attr.comments.where({issue_id: comment.get('issue_id'), ancestry: ancestry});
	},
	
	emptyInput: function() {
		$(this.el).find('input#title').val('');
	}
});