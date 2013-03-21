Fauxble.Collections.Ranks = Backbone.Collection.extend({
	
	model: Fauxble.Models.Rank,
	url: 'ranks',	
	
	initialize: function(models) {
		this.on('change:score', this.sort, this);
	},
	
	comparator: function(rank) {
		return rank.get('score');
	},
	
	doSomethin: function(model) {
		this.sort();
	},
	
	topFiveIssue: function(issue, length) {
		var ranks = this.where({issue_id: issue.get('id')});
		
		if (ranks.length < length) {
			length = ranks.length;
		}
		
		return ranks.splice(0, length);
	},
	
	currentUserIssue: function(user, issue, length) {
		var ranks = this.where({issue_id: issue.get('id')}),
			user_rank = this.where({issue_id: issue.get('id'), user_id: user.get('id')})[0];
			
		if (ranks.indexOf(user_rank) !== -1) {
			return ranks.indexOf(user_rank);
		} else {
			return ranks.length + 1;
		}
	},
	
	createRank: function(user, challenge, score) {
		var rank = this.where({user_id: user.get('id'), issue_id: challenge.get('issue_id')})[0];

		if (!rank) {
			rank = this.create({
				user_id: user.get('id'),
				issue_id: challenge.get('issue_id')
			});
		}
		
		rank.set({
			score: rank.get('score') + score
		});
		rank.save();
	},
	
	getScore: function(user, issue) {
		var score = 0,
			ranks;
		
		if (user) {
			if (issue) {
				ranks = this.where({user_id: user.get('id'), issue_id: issue.get('id')});
			} else {
				ranks = this.where({user_id: user.get('id')});
			}
		}
		
		if (ranks) {
			_.each(ranks, function(rank) {
				score = score + rank.get('score');
			});
		}
		
		return score;
	},
	
	getRank: function(users, user, issue) {
		var self = this;
		users = users.where({signed_in: true}).concat(users.where({signed_in_fb: true}));
		
		users.sort(function(a, b) {
			return self.getScore(b, issue) - self.getScore(a, issue);
		});

		return users.indexOf(user) + 1;
	},
	
	setFilledStars: function(num, element) {
		for (i = 0; i < num; i++) {
			this.appendFilledStar(element);
		}
	},
	
	getFilledStars: function(score, fill_score) {
		var stars = parseInt(score / fill_score);
		
		if (stars > 5) {
			stars = 5;
		}
		
		return stars;
	},
	
	appendFilledStar: function(element) {
		$(element).append(JST['stars/filled']);
	},
	
	setActiveStar: function(score, fill_score, element) {
		$(element).append(JST['stars/active']);
		if ($(element).closest('.user').hasClass('sidebar')) {
			$(element).find('input').attr('data-bgColor', '#000000');  // here is where you can change the background color
		}															   // of the header active star circle
		$(element).find('.dial').knob();
		$(element).find('.dial').removeClass('hide');
		$(element).find('.dial').val(Math.round((score / fill_score) * 100)).trigger('change');
	},
	
	getActiveStar: function(score, fill_score) {
		return score % fill_score;
	},
	
	fillActiveStar: function(rank, fill_num, active_ele, filled_ele) {
		var count = parseInt($(active_ele).find('.dial').val()),
			score = Math.abs(Math.round(((rank.get('score') % fill_num) / fill_num) * 100) - count),
			self = this,
			inter;

		inter = setInterval(function() {
			if (score <= 0) {
				clearInterval(inter);
			}
			
			if (count >= 100) {
				clearInterval(inter);
				self.addNewFilledStar(score, active_ele, filled_ele);
			}
			
			$(active_ele).find('.dial').val(count).trigger('change');
			score = score - 1;
			count = count + 1;
		}, 50);
	},
	
	seeingStars: function(user, issue, active_ele, filled_ele, fill_score) {
		var score = this.getScore(user, issue),
			filled_stars = this.getFilledStars(score, fill_score);
			
		this.setFilledStars(filled_stars, filled_ele);
		
		if (filled_stars < 5) {
			this.setActiveStar(this.getActiveStar(score, fill_score), fill_score, active_ele);
		}
	},
	
	addNewFilledStar: function(score, active_ele, filled_ele) {
		var big_stars = $(filled_ele).children().get(),
			count = 0,
			inter;
		
		if (big_stars < 4) {
			this.appendFilledStar(filled_ele);
			inter = setInterval(function() {
				if (score <= 0) {
					clearInterval(inter);
				}
				$(active_ele).find('.dial').val(count).trigger('change');
				score = score - 1;
				count = count + 1;
			}, 50);
		} else {
			$(active_ele).empty();
			this.appendFilledStar(filled_ele);
		}
	}
});
