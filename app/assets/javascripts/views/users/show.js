Fauxble.Views.UsersShow = Backbone.View.extend({
	
	events: {
		'click #profile' : 'userProfile',
		'click #back' : 'goBack'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		this.is_sidebar = options.is_sidebar;
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
		$(this.el).html(this.template({
			user: this.user
		}));
		
		if (this.is_sidebar) {
			$(this.el).addClass('sidebar');
		} else {
			setTimeout(function() {
				self.renderGlobalRank();
			}, 0);
		}
		
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
	
	userProfile: function() {
		$(this.el).find('#profile').addClass('hide');
		$(this.el).find('#back').removeClass('hide');
		Backbone.history.navigate('user' + this.user.get('id'), true);
	},
	
	goBack: function() {
		$(this.el).find('#back').addClass('hide');
		$(this.el).find('#profile').removeClass('hide');
		parent.history.back();
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