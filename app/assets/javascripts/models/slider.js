Fauxble.Models.Slider = Backbone.Model.extend({
	
	setDefaults: function(obj) {
		this.min = this.get('min');
		this.correct = this.get('correct');
		this.max = this.get('max');
		this.slider_element = obj.slider_element;
		this.correct_element = obj.correct_element;
		this.input_element = obj.input_element;
		this.fill_element = obj.fill_element;
		this.exponent = obj.exponent;
		this.left_margin = obj.left_margin;
		this.slider_width = obj.slider_width;
		this.bar_width = obj.bar_width;
	},
	
	bindSliderEvent: function(type, element) {
		var self = this;
		$(document).on(type, function(event) {
			if (type === 'touchmove') {
				self.moveSlider(event.originalEvent.touches[0].pageX, element);
			} else {
				self.moveSlider(event.pageX, element);
			}
		});
	},
	
	bindInputEvent: function(type) {
		var self = this;
		$(document).on(type, function(event) {
			var input = $(self.input_element).val();

			if (self.min % 1 !== 0 || self.correct % 1 !== 0) {
				input = parseFloat(input);
			} else {
				input = self.removeCommas(input);
			}

			if (!isNaN(input) && !self.outOfBounds(input)) {
				self.moveSliderFromInput(input, self.slider_element);
			}
		});
	},
	
	unbindEvent: function(type) {
		$(document).off(type);
	},
	
	outOfBounds: function(position) {
		if (position >= this.min && position <= this.max) {
			return false;
		} else {
			return true;
		}
	},
	
	moveSlider: function(event_x, element) {
		var position = this.getSliderPosition(event_x);

		if (!this.outOfBounds(position)) {
			this.setSliderPosition(event_x, element);
			if ($(element).attr('id') === $(this.slider_element).attr('id')) {
				this.setInputField(position);
			}
		}
	},
	
	moveSliderFromInput: function(input, element) {
		$(element).css('left', this.roundValue(this.getInputField(this.removeCommas(input))));

		if ($(element).attr('id') === $(this.slider_element).attr('id')) {
			this.highlightFill();
		}
	},
	
	getSliderPosition: function(event_x) {
		if (this.exponent) {
			return this.getExponentialPosition(event_x);
		} else {
			return this.getLinearPosition(event_x);
		}
	},
	
	setSliderPosition: function(event_x, element) {
		$(element).css('left', Math.round((event_x - this.left_margin) - this.slider_width) + 'px');

		if ($(element).attr('id') === $(this.slider_element).attr('id')) {
			this.highlightFill();
		}
	},
	
	getInputField: function(input) {
		if (this.exponent) {
			return this.getExponentialInput(input);
		} else {
			return this.getLinearInput(input);
		}
	},
	
	setInputField: function(position) {
		$(this.input_element).val(this.roundValue(position));
	},
	
	getExponentialPosition: function(event_x) {
		var min = this.min,
			max = this.max,
			exponent = this.exponent,
			bar_width = this.bar_width,
			slider_width = this.slider_width,
			margin = this.left_margin;

		if (min === 0) {
			min = 1;
		}

		return min * Math.pow(Math.pow((max / min), (1 / exponent)), (exponent * (((event_x - margin) - (0.5 * slider_width)) / bar_width)));
	},
	
	getExponentialInput: function(input) {
		var min = this.min,
			max = this.max,
			exponent = this.exponent,
			bar_width = this.bar_width,
			slider_width = this.slider_width,
			margin = this.left_margin;

		if (min === 0) {
			min = 1;
		}

		return ((Math.log((input / min)) * bar_width) / (Math.log(Math.pow((max / min), (1 / exponent))) * exponent)) - (0.5 * slider_width);
	},
	
	getLinearPosition: function(event_x) {
		var min = this.min,
			max = this.max,
			bar_width = this.bar_width,
			slider_width = this.slider_width,
			margin = this.left_margin;

		return (((event_x - margin) - (0.5 * slider_width)) * ((max - min) / bar_width)) + min;
	},
	
	getLinearInput: function(input) {
		var min = this.min,
			max = this.max,
			bar_width = this.bar_width,
			slider_width = this.slider_width,
			margin = this.left_margin;

		return (input / ((max - min) / bar_width)) - (0.5 * slider_width);
	},
	
	highlightFill: function() {
		$(this.fill_element).css('width',
			parseInt(
				$(this.slider_element).css('left')) +
				Math.round(this.slider_width * 0.5
			) + 'px'
		);
	},
	
	defaultSliderPosition: function(element) {
		var position = (this.bar_width / 2) + this.left_margin + (0.5 * this.slider_width);
		this.moveSlider(position, element);
	},
	
	getScore: function(element) {
		return Math.round((
			Math.abs(
				parseInt($(element).css('left')) - 
				parseInt($(this.correct_element).css('left'))
			) / 
			this.bar_width
		) * 100);
	},
	
	getDisplayable: function() {
		var correct = this.get('correct'),
			min = this.get('min'),
			max = this.get('max'),
			nums;
			
		if (correct % 1 !== 0 || min % 1 !== 0) {
			nums = {
				max: this.addUnits(String(max)),
				min: this.addUnits(String(min)),
				correct: this.addUnits(String(correct)) 
			};
		} else {
			nums = {
				max: this.addUnits(this.addCommas(max)),
				min: this.addUnits(this.addCommas(min)),
				correct: this.addUnits(this.addCommas(correct))
			};
		}
		return nums;
	},
	
	getAnswerAndScore: function(input) {
		var answer,
			score;
		
		if (this.min % 1 !== 0 || this.correct % 1 !== 0) {
			input = parseFloat(input);
		} else {
			input = this.removeCommas(input);
		}
		
		if (!isNaN(input) && !this.outOfBounds(input)) {
			answer = input;
		} else {
			answer = this.getSliderPosition(parseInt($(this.slider_element).css('left')) + this.left_margin + (0.5 * this.slider_width));
		}
		
		if (input === this.correct) {
			score = 100;
		} else {
			score = 100 - this.getScore(this.slider_element);
		}
		
		return {answer: answer, score: score};
	},
	
	addUnits: function(val) {
		var units = this.get('units'),
			index = units.indexOf('/');
			
		if (index === 0) {
			return val.toString() + units.substring(index + 1);
		} else {
			return units.substring(0, index) + val.toString();
		}
	},
	
	roundValue: function(val) {
		if (this.get('min') % 1 !== 0 || this.get('correct') % 1 !== 0) {
			if (((this.get('correct') % 1) * 10) % 1 === 0) {
				return Math.floor(val * 10) / 10;
			} else {
				return Math.floor(val * 100) / 100;
			}
		} else {
			return this.addCommas(Math.round(val));
		}
	},
	
	addCommas: function(val) {
		while (/(\d+)(\d{3})/.test(val.toString())){
			val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
		}
		return val;
	},
	
	removeCommas: function(val) {
		return parseInt(String(val).replace(/\,/g,''));
	},
	
	getRandomAnswer: function() {
		var correct = this.get('correct'),
			min = this.get('min'),
			max = this.get('max'),
			answer;
			
		if (this.get('is_exponential')) {
			if (min < 1) {
				min = 1;
			}
			answer = (Math.random() * ((Math.log(max) / Math.log(3)) - (Math.log(min) / Math.log(3)))) + (Math.log(min) / Math.log(3));
			answer = Math.pow(3, answer);
		} else {
			answer = (Math.random() * (max - min)) + min;
		}
		
		if (min % 1 !== 0 || correct % 1 !== 0) {
			if (((correct % 1) * 10) % 1 === 0) {
				return Math.floor(answer * 10) / 10;
			} else {
				return Math.floor(answer * 100) / 100;
			}
		} else {
			return Math.round(answer);
		}
	},
	
	getScoreFromAnswer: function(answer) {
		var correct = this.get('correct'),
			min = this.get('min'),
			max = this.get('max');
		
		if (this.get('is_exponential')) {
			return 100 - Math.round(
				(Math.abs(
					Math.pow(answer, (1 / 3)) - Math.pow(correct, (1 / 3))) / (Math.pow(max, (1 / 3)) - Math.pow(min, (1 / 3)))
				) * 100
			);
		} else {
			return 100 - Math.round(Math.abs(answer - correct) / (max - min));
		}
	}
});