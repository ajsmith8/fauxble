// on focus input bind keypress
// get matches from fb friends
// re-render
// users[index]['name']

function filterKeyUp(event, users, view) {
	var input = $(view.el).find('#filter').val(),
		new_users = [];
	
	if (input.length > 2) {
		new_users = filterUsers(input, users);
		renderFiltered(new_users, view);
	} else {
		renderFiltered(users, view);
	}
}

function renderFiltered(users, view) {
	$(view.el).find('#friends').empty();
	
	for (u = 0; u < users.length; u++) {
		view.appendFbFriend(users[u], u);
	}
}

function filterUsers(input, users) {
	var array = [],
		names;
	
	_.each(users, function(u) {
		names = u['name'].split(' ');
		
		for (n = 0; n < names.length; n++) {
			if (isMatch(input, names[n])) {
				array.push(u);
				break;
			}
		}
	});
	
	return array;
}

function isMatch(input, name) {
	input = input.split(' ');
	
	for (i = 0; i < input.length; i++) {
		if ((name.toLowerCase()).indexOf(input[i].toLowerCase()) >= 0) {
			return true;
		}
	}
	
	return false;
}