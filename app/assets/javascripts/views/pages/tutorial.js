Fauxble.Views.PagesTutorial = Backbone.View.extend({
	
	events: {
		'click' : 'closeTutorial'
	},
	
	initialize: function(options) {
		this.attr =  options.attr;
		this.kind = options.kind;
		this.element = options.element;

		this.template = JST['tutorials/' + this.kind];
	},
	
	render: function() {
		$(this.el).addClass('tutorial');
		$(this.element).addClass('tutorial-background');
		$(this.el).html(this.template());
		
		return this;
	},
	
	closeTutorial: function() {
		$(this.element).removeClass('tutorial-background');
		$(this.el).parent().empty();
	}
});