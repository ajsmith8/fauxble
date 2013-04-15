Fauxble.Collections.Ranks = Backbone.Collection.extend({
	
	model: Fauxble.Models.Rank,
	url: 'ranks',	
	
	initialize: function() {
		this.on('change:score', this.doSomethin, this);
	},
	
	fetchRanks: function(issue, ids, callback) {
		var params;
		
		if (issue) {
			if (ids) {
				params = {rank: {issue_id: issue.get('id'), user_id: ids}};
			} else {
				params = {rank: {issue_id: issue.get('id'), user_id: ids}};
			}
		} else {
			if (ids) {
				params = {rank: {issue_id: null, user_id: ids}};
			} else {
				params = {rank: {issue_id: null}};
			}
		}
		
		this.fetch({
			data: params,
			remove: false,
			silent: true,
			success: function(collection, response, options) {
				console.log('rank success');
				if (callback) {
					callback();
				}
			},
			error: function(collection, response, options) {
				console.log('rank error');
			}
		});
	},
	
	fetchUserRanks: function(user) {
		this.fetch({
			data: {
				rank: {user_id: user.get('id')}
			},
			success: function(collection, response, options) {
				
			},
			error: function(collection, response, options) {
				console.log('rank error');
			}
		});
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
	
	createRank: function(user, challenge, score, fact) {
		var rank = this.where({user_id: user.get('id'), issue_id: challenge.get('issue_id')})[0],
			global = this.where({user_id: user.get('id'), issue_id: null})[0],
			self = this;

		if (!rank) {
			rank = this.create({
				user_id: user.get('id'),
				issue_id: challenge.get('issue_id')
			});
		}
		
		rank.set({
			score: rank.get('score') + score,
			facts: rank.get('facts') + fact
		});
		rank.save();
		
		if (!global) {
			this.create({
				user_id: user.get('id'),
				issue_id: null,
				score: self.getGlobalScore(user),
				facts: self.getGlobalFacts(user)
			});
		} else {
			global.set({
				score: global.get('score') + score,
				facts: global.get('facts') + fact
			});
			global.save();
		}
	},
	
	getGlobalScore: function(user) {
		var ranks = this.where({user_id: user.get('id')}),
			score = 0;
			
		for (var r = 0, len = ranks.length; r < len; r++) {
			if (ranks[r].get('score')) {
				score = score + ranks[r].get('score');
			}
		}
		
		return score;
	},
	
	getGlobalFacts: function(user) {
		var ranks = this.where({user_id: user.get('id')}),
			facts = 0;
			
		for (var r = 0, len = ranks.length; r < len; r++) {
			if (ranks[r].get('facts')) {
				facts = facts + ranks[r].get('facts');
			}
		}
		
		return facts;
	},
	
	getScore: function(user, issue) {
		var score = 0,
			ranks = [];
		
		if (user) {
			if (issue) {
				ranks = this.where({user_id: user.get('id'), issue_id: issue.get('id')});
			} else {
				ranks = this.where({user_id: user.get('id')});
			}
		}
		
		for (r = 0; r < ranks.length; r++) {
			score = score + ranks[r].get('score');
		}
		
		return score;
	},
	
	getFacts: function(issue) {
		var ranks,
			facts = 0;
		
		if (issue) {
			ranks = this.where({issue_id: issue.get('id')});
		} else {
			ranks = this.where({issue_id: null});
		}
		
		for (var r = ranks.length; r > 0; r--) {
			facts = facts + ranks[r - 1].get('facts');
		}
		
		return facts;
	},
	
	getUsers: function(issue) {
		var ranks,
			users = 0;
		
		if (issue) {
			ranks = this.where({issue_id: issue.get('id')});
		} else {
			ranks = this.where({issue_id: null});
		}
		
		for (var r = ranks.length; r > 0; r--) {
			if (ranks[r - 1].get('facts') > 0) {
				users = users + 1;
			}
		}
		
		return users;
	},
	
	getUserFacts: function(user, issue) {
		var facts = 0,
			ranks;
		
		if (issue) {
			ranks = this.where({issue_id: issue.get('id'), user_id: user.get('id')});
		} else {
			ranks = this.where({issue_id: null, user_id: user.get('id')});
		}
		
		for (var r = 0, len = ranks.length; r < len; r++) {
			if (ranks[r].get('facts')) {
				facts = facts + ranks[r].get('facts');
			}
		}
		
		return facts;
	},
	
	getRank: function(users, user, issue) {
		var self = this;
		
		/* users.sort(function(a, b) {
			return self.getScore(b, issue) - self.getScore(a, issue);
		}); 

		return users.indexOf(user) + 1; */
		return Math.round(Math.random() * 100) + 50;
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
	},
	
	getTopUsers: function(user, issue, num) {
		console.log(this);
		var users = Fauxble.users,
			has_current_user = false,
			tops = [],
			index = 0,
			ranks;
		
		if (issue) {
			ranks = this.where({issue_id: issue.get('id')});
		} else {
			ranks = this.where({issue_id: null});
		}
		
		ranks = ranks.sort(function(a, b) {
			return b.get('score') - a.get('score');
		});
		console.log(ranks);
		for (var i = 0; i < num; i++) {
			var id = ranks[i].get('user_id');
			
			if (user && user.get('id') === id) {
				has_current_user = true;
			}
			
			tops.push({user: users.get(id), rank: i + 1});
		}
		
		if (user && !has_current_user) {
			for (var i = 5; i < ranks.length; i++) {
				if (ranks[i].get('user_id') === user.get('id')) {
					index = i + 1;
					break;
				}
			}
			
			tops[4] = {user: user, rank: index};
		}
		
		return tops;
	}
});
