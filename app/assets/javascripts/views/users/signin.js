Fauxble.Views.UsersSignin = Backbone.View.extend({
	
	template: JST['users/signin'],
	
	events: {
		'submit #user' : 'createUser',
		'click #signup' : 'renderSignup'
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
			user;
		
		//start loading 'waiting for authentication'
		// find user by name and use save to hit update in controller
		
		user = this.attr.users.where({name: name})[0];
		
		if (user) {
			if (user.authenticate(password)) {
				user.save({}, {
					success: function(model, response) {
						window.location.reload();
					},
					error: function(model, response) {
						window.location.reload();
					}
				});
			} else {
				alert('password incorrect');
			}
		} else {
			alert('no user found');
		}
		
	},
	
	renderSignup: function() {
		this.view.renderSignup();
	}
});