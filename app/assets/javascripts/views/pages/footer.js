Fauxble.Views.PagesFooter = Backbone.View.extend({
	
	template: JST['pages/footer'],
	
	events: {
		'click #share' : 'shareQuote'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
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
		$(this.el).find('img').attr('src', 'http://s3.amazonaws.com/fusegap/people/' + this.quote.image + '.png');
	},
	
	getQuotes: function() {
		var quotes = [
			{
				quote: 'Information is the currency of democracy.', 
				source: 'Thomas Jefferson', 
				image: 'TJ'
			},{
				quote: 'The more I see, the less I know for sure.', 
				source: 'John Lennon', 
				image: 'lennon'
			},{
				quote: 'The important thing is to not stop questioning. Curiosity has its own reason for existing.', 
				source: 'Albert Einstein', 
				image: 'einstein'
			},{
				quote: 'Common sense is nothing more than a deposit of prejudices laid down by the mind before you reach eighteen.', 
				source: 'Albert Einstein', 
				image: 'einstein'
			},{
				quote: 'A true genius admits he knows nothing.', 
				source: 'Albert Einstein', 
				image: 'einstein'
			},{
				quote: 'In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.', 
				source: 'Galileo', 
				image: 'galileo'
			},{
				quote: 'True wisdom comes to each of us when we realize how little we know about life, ourselves, and the world around us.', 
				source: 'Confucius', 
				image: 'Confucius'
			},{
				quote: 'To study and not think is a waste. To think and not study is dangerous.', 
				source: 'Confucius', 
				image: 'Confucius'
			},{
				quote: 'I know that I am intelligent because I know that I know nothing.', 
				source: 'Socrates', 
				image: 'socrates'
			},{
				quote: 'The price good men pay for indifference to public affairs is to be ruled by evil men.', 
				source: 'Plato', 
				image: 'plato'
			},{
				quote: 'The high minded man must care more for the truth than what people think.', 
				source: 'Aristotle', 
				image: 'A'
			},{
				quote: 'The day we see the truth and cease to speak is the day we begin to die.', 
				source: 'Martin Luther King Jr.', 
				image: 'MLK'
			},{
				quote: "What we know is a drop, what we don\'t know is an ocean.", 
				source: 'Sir Isaac Newton', 
				image: 'newton'
			},{
				quote: 'It is unwise to be too sure of one\'s own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.', 
				source: 'Mahatma Gandhi', 
				image: 'ghandi'
			},{
				quote: 'Ten people who speak make more noise than ten thousand who are silent.', 
				source: 'Napolean Bonaparte', 
				image: 'napolean'
			},{
				quote: 'To argue with someone who has renounced the use of reason is like administering medicine to the dead.', 
				source: 'Thomas Paine', 
				image: 'paine'
			},{
				quote: 'No snowflake in an avalanche ever feels responsible.', 
				source: 'Voltaire', 
				image: 'voltaire'
			},{
				quote: 'Ignorance more frequently begets confidence than does knowledge.', 
				source: 'Charles Darwin', 
				image: 'darwin'
			},{
				quote: 'A foolish faith in authority is the worst enemy of truth.', 
				source: 'Albert Einstein', 
				image: 'einstein'
			},{
				quote: 'The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.', 
				source: 'Stephen Hawking', 
				image: 'hawking'
			},{
				quote: 'Being ignorant is not so much a shame, as being unwilling to learn.', 
				source: 'Benjamin Franklin', 
				image: 'franklin'
			},{
				quote: 'Extremes to the right and to the left of any political dispute are always wrong.', 
				source: 'Dwight David Eisenhower', 
				image: 'eisenhower'
			},{
				quote: 'If you can\'t feed a hundred people, feed just one.', 
				source: 'Mother Theresa', 
				image: 'theresa'
			},{
				quote: 'Democracy cannot succeed unless those who express their choice are prepared to choose wisely. The real safeguard of democracy, therefore, is education.', 
				source: 'Franklin Delano Roosevelt', 
				image: 'fdr'
			}
		];
		
		return quotes;
	},
	
	shareQuote: function() {
		var index = this.quotes.indexOf(this.quote);
		
		this.fbShare(this.quote, index, this.user);
	},
	
	fbShare: function(quote, index, user) {
		gaEvent('Quote', 'Clicked', String(index), null);
		
		if (user && !!user.get('uid')) {
			var obj = { 
				method: 'feed', 
				link: 'http://fusegap.org', 
				name: 'fuseGap', 
				to: user.get('uid'),
				picture: 'http://s3.amazonaws.com/fusegap/people/' + quote.image + '.png', 
				description: quote.quote
			};
			function callback(response) 
			{
				if (response) {
					gaEvent('Quote', String(index), String(user.get('id')), null);
					window.Fauxble.router.thanksPopup();
				} else {
					//close
				}
	        }
			FB.ui(obj, callback);
		} else {
			window.Fauxble.router.fbSignInPopup();
		}
	}
});