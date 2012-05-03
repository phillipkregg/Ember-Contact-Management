App.ListContactsView = Ember.View.extend({
	templateName:     'app/templates/contacts/list',
	contactsBinding:  'App.contactsController',
	
	showNew: function() {
		this.set('isNewVisible', true);
	
		
	},
	
	hideNew: function() {
		this.set('isNewVisible', false);
	},
	
	
	hideEdit: function() {
		this.set('isEditing', false);	   
	}

});
