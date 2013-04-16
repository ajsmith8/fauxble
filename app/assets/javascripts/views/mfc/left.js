Fauxble.Views.MfcLeft = Backbone.View.extend({
	
	template: JST['mfc/left'],
	
	events: {
		'click .MFC_like_container' : 'gaEvent'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.facts = this.getFacts();
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
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
	},
	
	gaEvent: function() {
		gaEvent('Click', 'Like', 'MFC Left', null);
	},
	
	getFacts: function() {
		var facts = 0,
			self = this;
		
		this.attr.ranks.fetch({
			data: {
				rank: {issue_id: null}
			},
			remove: false,
			silent: true,
			success: function(collection, response, options) {
				var ranks = collection.toArray();
				for (var c = 0, len = ranks.length; c < len; c++) {
					if (ranks[c].get('facts')) {
						facts = facts + ranks[c].get('facts');
					}
				}
				
				self.facts = facts;
				self.fillBar();
			}
		});
	}
});