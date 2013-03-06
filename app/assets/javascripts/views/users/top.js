Fauxble.Views.UsersTop = Backbone.View.extend({
	
	template: JST['users/top'],
	
	events: {
		
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.user = options.user; // {user: , rank: }
		this.obj = {
			name: this.user.user.get('name'),
			uid: this.user.user.get('uid'),
			rank: this.user.rank 
		};
		if (this.user.user.get('id') === this.attr.current_user.get('id')) {
			this.obj.name = 'You';
		}
	},
	
	render: function() {
		$(this.el).addClass('border');
		$(this.el).html(this.template({
			name: this.obj.name,
			uid: this.obj.uid,
			rank: this.obj.rank
		}));
		
		return this;
	}
});