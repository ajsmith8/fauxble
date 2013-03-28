Fauxble.Collections.Comments = Backbone.Collection.extend({
	
	model: Fauxble.Models.Comment,
	url: 'comments',
	
	createComment: function(title, user, issue, parent, view) {
		var ancestry = null;
		
		if (parent) {
			ancestry = parent.get('ancestry');
			if (ancestry) {
				ancestry = ancestry + '/' + parent.get('id');
			} else {
				ancestry = String(parent.get('id'));
			}
		}
		
		this.create({
			title: title,
			issue_id: issue.get('id'),
			user_id: user.get('id'),
			ancestry: ancestry
		}, {
			success: function(model, response) {
				//stop loading
				view.renderComment(model);
				view.emptyInput();
			},
			error: function(model, response) {
				//stop loading
				//error
			}
		});
	}
});
