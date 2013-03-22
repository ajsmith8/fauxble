Fauxble.Views.MfcLeft = Backbone.View.extend({
	
	template: JST['mfc/left'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.facts = options.facts;
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.fillBar();
		}, 0);
		
		return this;
	},

	fillBar: function() {
		var width = Math.round(Math.pow(this.facts, 1 / 3));
		
		$(this.el).find('#progress').css('width', width + '%');
		$(this.el).find('.counter').html(this.addCommas(this.facts));
	},
	
	addCommas: function(val) {
		while (/(\d+)(\d{3})/.test(val.toString())){
			val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
		}
		return val;
	}
});