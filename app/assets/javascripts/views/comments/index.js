Fauxble.Views.CommentsIndex = Backbone.View.extend({
	
	template: JST['comments/index'],
	
	events: {
		'submit #new_comment' : 'newComment'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.comments = options.comments;
		this.issue = options.issue;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template({
			user: this.user
		}));
		
		setTimeout(function() {
			for (var c = 0; c < self.comments.length; c++) {
				self.renderComment(self.comments[c]);
			}
		}, 0);
		
		return this;
	},
	
	renderComment: function(comment) {
		var view = new Fauxble.Views.CommentsShow({
			attr: this.attr,
			comment: comment
		});
		$(this.el).append(view.render().el);
	},
	
	newComment: function(event) {
		event.preventDefault();
		var title = $('#new_comment').find('textarea#title').val();
		
		if (this.user.signedIn()) {
			//start loading
			this.attr.comments.createComment(title, this.user, this.issue, null, this);
		} else {
			alert('You must be signed in to comment');
		}
	},
	
	emptyInput: function() {
		$('#new_comment').find('textarea#title').val('');
	}
});	
