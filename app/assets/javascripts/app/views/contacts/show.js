App.ShowContactView = Ember.View.extend({
	templateName: 'app/templates/contacts/show',	
	tagName:      'tr',
			
	 showEdit: function() {
	 	var contact = this.get("contact");
	    this.set('isEditing', true);	 
	    alert("isEditing = true");	    
	    alert(contact.first_name + "is the name clicked in show view");
	}
})
