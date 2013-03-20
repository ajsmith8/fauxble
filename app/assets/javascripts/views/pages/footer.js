Fauxble.Views.PagesFooter = Backbone.View.extend({
	
	template: JST['pages/footer'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.quotes = this.getQuotes();
		this.quote = null;
		
		this.attr.users.on('page', this.newQuote, this);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		
		setTimeout(function() {
			self.newQuote();
		}, 0);
		
		return this;
	},
	
	newQuote: function() {
		var quotes = _.shuffle(this.quotes),
			index = 0;
		
		if (quotes[index] === this.quote) {
			index = 1;
		}
		
		this.quote = quotes[index];
		
		$(this.el).find('#quote').html(this.quote.quote);
		$(this.el).find('#name').html(this.quote.source);
	},
	
	getQuotes: function() {
		var quotes = [
			{quote: 'This is a quote', source: 'Thomas Jefferson'},
			{quote: 'This is another quote', source: 'Andrew Smith'},
			{quote: 'This is NOT a quote!', source: 'Joanie Gentile'},
			{quote: 'Is this a quote?', source: 'Aaron Henning'}
		];
		
		return quotes;
	}
});