App = Ember.Application.create();

App.displayError = function(e) {
	if (typeof e === 'string') {
		// display error strings
		alert(e);
	}
	else if (typeof e === 'object' && e.responseText !== undefined) {
		alert(e.responseText);
	}
	else {
		alert("An unexpected error occurred.");
	}
};
