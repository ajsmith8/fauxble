Fauxble.Views.AnswersShow = Backbone.View.extend({
	
	initialize: function(options) {
		this.attr = options.attr;
		this.answer = options.answer;
		this.users = options.users;
		this.template = options.template;
	},
	
	render: function() {
		$(this.el).attr('id', this.answer.get('id'));
		$(this.el).addClass('answer');
		$(this.el).html(this.template({
			answer: this.answer,
			users: this.users
		}));
		
		return this;
	}
});