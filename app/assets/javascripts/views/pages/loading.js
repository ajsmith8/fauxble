Fauxble.Views.PagesLoading = Backbone.View.extend({
	
	template: JST['pages/loading'],
	
	initialize: function() {
		
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		setTimeout(function() {
			self.setOrder();
		}, 0);
		return this;
	},
	
	setOrder: function(elements) {
		var elements = $('.ball').get(),
			self = this;
		
		for (var i = 0, len = elements.length; i < len; i++) {
			this.loading(elements[i], i);
		}
	},
	
	loading: function(element, index) {
		var self = this;
		
		setTimeout(function() {
			$(element).animate({
				opacity: "1"
			}, 0);
			
			$(element).animate({
				opacity: "0"
			}, 1000);
			
			if (index === 7) {
				self.setOrder();
			}
		}, index * 125);
	}
});