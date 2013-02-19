Fauxble.Views.UsersVersus = Backbone.View.extend({
	
	template: JST['users/versus'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.challenge = options.challenge;
		this.user = options.user;
		this.left_aligned = options.left_aligned;
		this.subviews = [];
		
		this.user.on('submit', this.incrementScore, this);
	},
	
	render: function() {
		var self = this;
		$(this.el).addClass('user versus');
		$(this.el).html(this.template({
			user: this.user,
			left_aligned: this.left_aligned,
			score: this.attr.tasks.getVersusScore(this.user, this.getQuestionIdsFromHash(), this.challenge)
		}));
		
		setTimeout(function() {
			self.renderIssueRank();
		}, 0);
		
		return this;
	},
	
	renderIssueRank: function() {
		var view = new Fauxble.Views.RanksIssue({
			attr: this.attr,
			issue: this.issue,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#rank').html(view.render().el);
	},
	
	incrementScore: function(score) {
		this.user.incrementScore($(this.el).find('#score'), 5, parseInt($(this.el).find('#score').html()), score);
	},
	
	getQuestionIdsFromHash: function() {
		var hash = window.location.hash,
			question_ids = this.challenge.get('question_ids').split('/'),
			ids = [];
			
		if (hash.split('question').length === 2) {
			hash = hash.split('question')[1];
			
			for (i = 0; i < question_ids.length; i++) {
				ids.push(parseInt(question_ids[i]));
				
				if (parseInt(question_ids[i]) === parseInt(hash)) {
					break;
				}	
			}
		}
		
		return ids;
	},
	
	onClose: function() {
		this.user.unbind('submit', this.incrementScore);
		
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});