Fauxble.Views.AchievablesIndex = Backbone.View.extend({
	
	template: JST['achievables/index'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
	},
	
	render: function() {
		var self = this;
		$(this.el).html(this.template());
		
		setTimeout(function() {
			self.renderAchievables();
		}, 0);
		
		return this;
	},
	
	renderAchievables: function() {
		this.attr.achievables.each(function(achievable) {
			if (self.attr.user_achievables.hasEarned(self.user, achievable)) {
				self.appendAchievable(achievable, $(self.el).find('#earned'), true);
			} else {
				self.appendAchievable(achievable, $(self.el).find('#locked'), false);				
			}
		});
	},
	
	appendAchievable: function(achievable, element, has_earned) {
		var view = new Fauxble.Views.AchievablesShow({
			attr: this.attr,
			achievable: achievable,
			has_earned: has_earned
		});
		this.subviews.push(view);
		$(element).append(view.render().el);
	}
});
// render earned and locked
