Fauxble.Views.PagesTutorial = Backbone.View.extend({
	
	events: {
		'click' : 'closeTutorial'
	},
	
	initialize: function(options) {
		this.attr =  options.attr;
		this.kind = options.kind;
		
		this.template = JST['tutorials/' + this.kind];
	},
	
	render: function() {
		$(this.el).addClass('tutorial');
		$(this.el).html(this.template());
		
		return this;
	},
	
	closeTutorial: function() {
		$(this.el).parent().empty();
	}
});