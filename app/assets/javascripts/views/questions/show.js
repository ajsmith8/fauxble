Fauxble.Views.QuestionsShow = Backbone.View.extend({
	
	template: JST['questions/show'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.question = options.question;
		this.next_question = options.next_question;
		this.challenge = options.challenge;
		this.subviews = [];
	},
	
	render: function() {
		var self = this;
		$(this.el).addClass('question');
		$(this.el).html(this.template({
			question: this.question
		}));
		
		setTimeout(function() {
			if (self.question.get('is_slider')) {
				self.renderSlider();
			} else {
				self.renderAnswers();
			}
		}, 0);
		
		return this;
	},
	
	renderSlider: function() {
		var view = new Fauxble.Views.SlidersShow({
			attr: this.attr,
			question: this.question,
			next_question: this.next_question,
			challenge: this.challenge
		});
		this.subviews.push(view);
		$(this.el).find('#slider_or_answers').html(view.render().el);
	},
	
	renderAnswers: function() {
		var view = new Fauxble.Views.AnswersIndex({
			attr: this.attr,
			question: this.question,
			next_question: this.next_question,
			challenge: this.challenge
		});
		this.subviews.push(view);
		$(this.el).find('#slider_or_answers').html(view.render().el);
	},
	
	onClose: function() {
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});