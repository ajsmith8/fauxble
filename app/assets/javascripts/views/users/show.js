Fauxble.Views.UsersShow = Backbone.View.extend({
	
	events: {
		'click .button' : 'profileOrBack'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.is_sidebar = options.is_sidebar;
		this.count = options.count;
		this.subviews = [];
		if (this.is_sidebar) {
			this.template = JST['users/show_sidebar'];
		} else {
			this.template = JST['users/show'];
		}
		this.attr.users.on('reset', this.render, this);
	},
	
	render: function() {
		var self = this;
		$(this.el).attr('id', this.user.get('id'));
		$(this.el).addClass('user');
		if (!this.is_sidebar) {
			if (this.count % 2 === 0) {
				$(this.el).addClass('dark');
			} else {
				$(this.el).addClass('light');
			}
		}
		$(this.el).html(this.template({
			user: this.user
		}));
		
		if (this.is_sidebar) {
			$(this.el).addClass('sidebar');
		}
		
		setTimeout(function() {
			self.renderGlobalRank();
			if (self.is_sidebar) {
				self.setProfileOrBack();
			}
		}, 0);

		return this;
	},
	
	renderGlobalRank: function() {
		var view = new Fauxble.Views.RanksGlobal({
			attr: this.attr,
			user: this.user
		});
		this.subviews.push(view);
		$(this.el).find('#rank').html(view.render().el);
	},
	
	setProfileOrBack: function() {
		var hash = window.location.hash;
		
		if (hash.split('user').length > 1) {
			$(this.el).find('#profile').addClass('hide');
			$(this.el).find('#back').removeClass('hide');
		} else {
			$(this.el).find('#back').addClass('hide');
			$(this.el).find('#profile').removeClass('hide');
		}
	},
	
	profileOrBack: function(event) {
		var element = $(event.target).closest('.button');
		
		if ($(element).find('#profile').hasClass('hide')) {
			$(this.el).find('#back').addClass('hide');
			$(this.el).find('#profile').removeClass('hide');
			parent.history.back();
		} else {
			$(this.el).find('#profile').addClass('hide');
			$(this.el).find('#back').removeClass('hide');
			Backbone.history.navigate('user' + this.user.get('id'), true);
		}
	},
	
	onClose: function() {
		this.attr.users.unbind('reset', this.render);
		
		_.each(this.subviews, function(view) {
			view.remove();
			view.unbind();

			if (view.onClose) {
				view.onClose();
			}
		});
	}
});