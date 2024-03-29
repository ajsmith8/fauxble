Fauxble.Views.UsersAutocomplete = Backbone.View.extend({
	
	template: JST['users/autocomplete'],
	
	events: {
		'keydown #auto' 		: 'getChar',
		'focus #auto' 			: 'showResults',
		'blur #auto' 			: 'removeResults',
		'hover .autocom-result' : 'setHovered',
		'click .autocom-result' : 'goToResult'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.friends = options.friends //pass in fb friend list
		this.hovered = null;
		this.matches = null;
		this.array = [];
		this.subviews = [];
		
		this.attr.users.on('auto', this.render, this);
	},
	
	render: function() {
		$(this.el).html(this.template());
		this.getArray();
		return this;
	},
	
	getArray: function() {
		var self = this;

		for (i = 0; i < this.friends.length; i++) {
			this.array.push({
				id: this.friends[i]['id'],
				title: this.friends[i]['name']
			});
		}
	},
	
	autocomplete: function(character) {
		var string, length;
		var self = this;
		
		if (character) {
			if (character !== 8) {
		        string = $('#auto').val() + String.fromCharCode(character);
			} else {
		        string = $('#auto').val().substring(0, $('#auto').val().length - 1);
			}
		} else {
			string = $('#auto').val();
		}
		
		$('#autocom').empty();
		
		if (string.length > 2) {			
			this.matches = $('#auto').autocomplete(string, this.array);
			if (this.matches.length < 10) {
				length = this.matches.length;
			} else {
				length = 10;
			}
			for (i = 0; i < length; i++) {
				this.appendResult(this.matches[i]);
			}
			this.hovered = $('#autocom').children().first();
			$(this.hovered).addClass('hovered');
		}
	},
	
	appendResult: function(object) {
		var view = new Fauxble.Views.UsersAutoResult({
			title: object.title,
			user: this.attr.users.where({id: object.id})[0]
		});
		this.subviews.push(view);
		$('#autocom').append(view.render().el);
	},
	
	setHovered: function(event) {
		$('#autocom').children().removeClass('hovered');
		if (event.type === 'mouseenter') {
			this.hovered = $(event.target);
			$(this.hovered).addClass('hovered');
		} else {
			this.hovered = null;
			if (this.matches) {
				this.hovered = $('#autocom').children().first();
				$(this.hovered).addClass('hovered');
			}
		}
	},
	
	getChar: function(event) {
		var self = this;

		switch(event.keyCode) {
			case 35: // end
			case 36: // home
			case 16: // shift
			case 17: // ctrl
			case 18: // alt
			case 37: // left
			case 39: // right
				break;
				
			case 38: //up
				event.preventDefault();
				self.hoverResult(1);
				break;
				
			case 40: //down
				event.preventDefault();
				self.hoverResult(-1);
				break;
				
			case 9: //tab
				break;
				
			case 13: //return
				event.preventDefault();
				self.selectResult();
				break;
				
			case 27: //escape
				break;
				
			default: 
				self.autocomplete(event.keyCode);
		}
	},
	
	hoverResult: function(dir) {
		var length;
		if (this.matches.length < 10) {
			length = this.matches.length;
		} else {
			length = 10;
		}
		
		if (this.hovered && this.matches) {
			if (dir === 1 && parseInt($(this.hovered).attr('id')) !== this.matches[0].id) {
				$(this.hovered).prev().addClass('hovered');
				$(this.hovered).removeClass('hovered');
				this.hovered = $(this.hovered).prev();
			}
			
			if (dir === -1 && parseInt($(this.hovered).attr('id')) !== this.matches[length - 1].id) {
				$(this.hovered).next().addClass('hovered');
				$(this.hovered).removeClass('hovered');
				this.hovered = $(this.hovered).next();
			}
		} else {
			if (dir === -1 && this.matches) {
				this.hovered = $('#autocom').children().first();
				$(this.hovered).addClass('hovered');
			}
		}
	},
	
	removeResults: function(event) {
		var self = this;
		if ($('#auto').val() === "" || !/\S/.test($('#title').val())) {
			$('#auto').removeClass('dark-text');
			$('#auto').addClass('light-text');
			$('#auto').val('Search Users...');
		}
		setTimeout(function() {
			self.hovered = null;
			self.matches = null;
			$('#autocom').empty();
		}, 200);
	},
	
	showResults: function() {
		if (!$('#auto').hasClass('dark-text')) {
			$('#auto').removeClass('light-text');
			$('#auto').addClass('dark-text');
			$('#auto').val('');
		}
		this.autocomplete(null);
	},
	
	goToResult: function(event) {
		var element = $(event.target).closest('.autocom-result');
		Backbone.history.navigate('users' + $(element).attr('id'), true);
	},
	
	onClose: function() {
		var views = this.subviews;
			
		this.attr.issues.unbind('auto', this.render);	
			
		for (var v = views.length; v > 0; v--) {
			var view = views[v - 1];

			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		}
	}
});