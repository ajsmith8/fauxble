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
			{quote: 'Democracy cannot succeed unless those who express their choice are prepared to choose wisely. The real safeguard of democracy, therefore, is education', source: 'Thomas Jefferson'},
			{quote: 'Information is the currency of democracy', source: 'Andrew Smith'},
			{quote: 'The important thing is to not stop questioning. Curiosity has its own reason for existing', source: 'Joanie Gentile'},
			{quote: 'It is unwise to be too sure of ones own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err', source: 'Aaron Henning'}
		];
		
		return quotes;
	}
});