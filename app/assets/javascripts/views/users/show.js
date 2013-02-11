Fauxble.Views.UsersShow = Backbone.View.extend({
	
	template: JST['users/show'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user;
		
		this.attr.users.on('reset', this.render, this);
	},
	
	render: function() {
		var self = this;
		$(this.el).attr('id', this.user.get('id'));
		$(this.el).addClass('user');
		$(this.el).html(this.template({
			user: this.user
		}));
		
		setTimeout(function() {
			self.renderGlobalRank();
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
	}
});