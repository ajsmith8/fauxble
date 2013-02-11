Fauxble.Views.QuestionsRage = Backbone.View.extend({
	
	template: JST['questions/rage'],
	
	initialize: function(options) {
		this.is_win = options.is_win;
		
		if (this.is_win) {
			this.img_num = 1 + Math.floor(Math.random() * 16);
		} else {
			this.img_num = 1 +Math.floor(Math.random() * 23);
		}
	},
	
	render: function() {
		$(this.el).html(this.template({
			is_win: this.is_win,
			num: this.img_num
		}));
		return this;
	}
});
