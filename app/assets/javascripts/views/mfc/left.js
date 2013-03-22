Fauxble.Views.MfcLeft = Backbone.View.extend({
	
	template: JST['mfc/left'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.facts = this.getFacts(this.attr.users.toArray(), this.attr.questions.toArray(), this.attr.tasks);
	},
	
	render: function() {
		var self = this;
		
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.fillBar();
		}, 0);
		
		return this;
	},
	
	getFacts: function(users, questions, tasks) {
		var facts = 0;
	
		for (u = 0; u < users.length; u++) {
			if (users[u].get('signed_in') || users[u].get('signed_in_fb')) {
				for (q = 0; q < questions.length; q++) {
					if (tasks.where({user_id: users[u].get('id'), question_id: questions[q].get('id')})[0]) {
						facts = facts + 1;
					}
				}
			}
		}
		
		return facts + 4000;
	},
	
	fillBar: function() {
		var width = Math.round(Math.pow(this.facts, 1 / 3));
		console.log(this.facts);
		console.log(width);
		$(this.el).find('#progress').css('width', width + '%');
		$(this.el).find('.counter').html(this.addCommas(this.facts));
	},
	
	addCommas: function(val) {
		while (/(\d+)(\d{3})/.test(val.toString())){
			val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
		}
		return val;
	}
});