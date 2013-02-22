Fauxble.Views.UsersSignup = Backbone.View.extend({
	
	template: JST['users/signup'],
	
	events: {
		'submit #new_user' : 'createUser',
		'click #signin' : 'renderSignin'
	},
	
	initialize: function(options) {
		this.attr = options.attr;
		this.view = options.view;
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	createUser: function(event) {
		event.preventDefault();
		
		var name = $('#user_name').val(),
			password = $('#password').val(),
			confirm = $('#confirm_password').val();
		
		//start loading 'waiting for authentication'	
		this.attr.users.authenticateUser(name, password, confirm, 6);
	},
	
	renderSignin: function() {
		this.view.renderSignin();
	}
});