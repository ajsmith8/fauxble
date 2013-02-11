Fauxble.Views.RanksIssue = Backbone.View.extend({
	
	template: JST['ranks/issue'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.issue = options.issue;
		this.user = options.user;
		this.fill_amount = 500;
		
		this.attr.ranks.on('change:score', this.fillActiveStar, this);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.attr.ranks.seeingStars(self.user, self.issue, $(self.el).find('#active'), $(self.el).find('#filled'), self.fill_amount);
		}, 0);
		
		return this;
	},
	
	fillActiveStar: function(model) {
		this.attr.ranks.fillActiveStar(model, self.fill_amount, $(this.el).find('#active'), $(this.el).find('#filled'));
	},
	
	onClose: function() {
		this.attr.ranks.unbind('change:score', this.fillActiveStar);
	}
});