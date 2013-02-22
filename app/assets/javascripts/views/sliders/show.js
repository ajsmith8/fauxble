Fauxble.Views.SlidersShow = Backbone.View.extend({
	
	events: {
		'submit #form' 	: 'submitAnswer',
		'click #next' 	: 'nextQuestion',
		'click #source' : 'goToSource',
		
		//slider mouse events
		'mousedown #user' 	: 'mouseDown',
		'mouseup' 			: 'mouseUp',
		'click #slider' 	: 'moveSliderOnClick',
		
		//slider input field events
		'focus #input' : 'bindKeyPress',
		'blur #input' 	: 'unbindKeyPress'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.challenge = options.challenge;
		this.question = options.question;
		this.next_question = options.next_question;
		this.slider = this.attr.sliders.where({question_id: this.question.get('id')})[0];
		this.user = this.attr.users.get(this.attr.current_user.get('id'));
		this.is_disabled = false;
		
		this.setRoundSpecifics();
	},
	
	setRoundSpecifics: function() {
		if (this.user.get('id') === this.challenge.get('challenger_id')) {
			this.template = JST['sliders/show_first'];
			this.users = {
				challenger: this.user,
				user: null
			};
			this.task = null;
		} else {
			this.template = JST['sliders/show_second'];
			this.users = {
				challenger: this.attr.users.get(this.challenge.get('challenger_id')),
				user: this.user
			};
			this.task = this.attr.tasks.where({
				user_id: this.users.challenger.get('id'), 
				challenge_id: this.challenge.get('id'), 
				question_id: this.question.get('id')
			})[0];
		}
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template({
			users: this.users,
			nums: this.slider.getDisplayable(),
			slider: this.slider
		}));
		
		setTimeout(function() {
			self.setDefaults();
		}, 0);
		
		return this;
	},
	
	setDefaults: function() {
		var exponent = null,
			margin;
		
		if (this.slider.get('is_exponential')) {
			exponent = 3;
		}

		margin = parseInt($('.page').css('margin-left')) + parseInt($('.column.right').css('margin-left'));
		if (!isNaN(parseInt($(this.el).parent().css('margin-left')))) {
			margin = margin + parseInt($(this.el).parent().css('margin-left'));
		}
		
		this.slider.setDefaults({
			exponent: exponent,
			slider_element: $(this.el).find('#user'),
			input_element: $(this.el).find('#input'),
			correct_element: $(this.el).find('#correct'),
			fill_element: $(this.el).find('#highlight'),
			bar_width: parseInt($('#slider').css('width')),
			slider_width: 30,
			left_margin: margin
		});
		
		this.slider.defaultSliderPosition($(this.el).find('#user'));
		if (this.task) {
			this.showChallenger();
		}
	},
	
	showCorrect: function() {
		this.slider.moveSliderFromInput(this.slider.get('correct'), $(this.el).find('#correct'));
		$(this.el).find('#correct').removeClass('hide');
	},
	
	showChallenger: function() {
		var element = $(this.el).find('#challenger'),
			self = this;
		
		this.slider.defaultSliderPosition(element);
		$(element).removeClass('hide');
		
		$(element).animate({
			left: Math.round(self.slider.getInputField(self.task.get('answer'))) + 'px'
		}, 10000);
	},
	
	showUser: function() {
		$(this.el).find('#user').find('#logo').addClass('hide');
		$(this.el).find('#user').find('#pic').removeClass('hide');
	},
	
	showRageComic: function(task) {
		var is_win = false,
			view;
			
		if (task.get('score') >= this.task.get('score')) {
			is_win = true;
		}
		
		view = new Fauxble.Views.QuestionsRage({
			is_win: is_win
		});
		$(this.el).find('#rage').html(view.render().el);
	},
	
	mouseDown: function(event) {
		if (!this.is_disabled) {
			if (!this.draggable) {
				event.preventDefault();
				this.draggable = true;
				this.slider.bindSliderEvent('mousemove', $(this.el).find('#user'));
			}
		}
	},
	
	mouseUp: function() {
		if (this.draggable) {
			this.draggable = false;
			this.slider.unbindEvent('mousemove');
		}
	},
	
	bindKeyPress: function() {
		var self = this;
		var input;
		if (!this.slider_disabled) {
			this.slider.bindInputEvent('keyup');
		}
	},
	
	unbindKeyPress: function() {
		this.slider.unbindEvent('keyup');
	},
	
	moveSliderOnClick: function(event) {
		if (!this.is_disabled) {
			if (!this.draggable) {
				this.slider.moveSlider(event.pageX, $(this.el).find('#user'));
			}
		}
	},
	
	submitAnswer: function(event) {
		event.preventDefault();
		var obj,
			answer,
			score,
			task;
		
		if (!this.is_disabled) {
			this.is_disabled = true;
			this.showCorrect();
			this.showUser();
			
			obj = this.slider.getAnswerAndScore($(this.el).find('#input').val());
			answer = obj.answer;
			score = obj.score;
			
			task = this.attr.tasks.createTask(this.question, this.challenge, this.user, null, answer, score, 0, this.attr.ranks);
			this.user.trigger('submit', score);
			
			if (this.task) {
				this.attr.users.get(this.task.get('user_id')).trigger('submit', this.task.get('score'));
				this.challenge.set({user_score: this.challenge.get('user_score') + score});
				this.showRageComic(task);
			} else {
				this.challenge.set({challenger_score: this.challenge.get('challenger_score') + score});
			}
			this.challenge.save();
			this.showNextAndSource();
		}
	},
	
	showNextAndSource: function() {
		$(this.el).find('input[type=submit]').addClass('hide');
		$(this.el).find('#after_submit').removeClass('hide');
	},
	
	goToSource: function() {
		window.open(this.attr.sources.where({question_id: this.question.get('id')})[0].get('url'), '_blank');
	},
	
	nextQuestion: function() {
		if (this.next_question) {
			Backbone.history.navigate(this.challenge.get('id') + '/question' + this.next_question.get('id'), true);
		} else {
			this.challenge.setSentOrFinished(this.task);
			Backbone.history.navigate('challenge' + this.challenge.get('id'), true);
		}
	}
});