App.NewContactView = Ember.View.extend({
	tagName:        'form',
	templateName:   'app/templates/contacts/edit',
	
	init: function() {
		this._super();		
		
		
		var contact = this.get("contact");
		//alert(contact.first_name);
		
		if (contact) {
			this.set("contact", contact.findResource());
			alert(contact.name + "is the Edit resource")
		} else {
			this.set("contact", App.Contact.create());
		}
		
	
		
		
	},
	
	didInsertElement: function() {
    this._super();
    this.$().hide().fadeIn('fast');
  },
	
	cancelForm: function() {
		this.get("parentView").hideNew();
	},
	
	submit: function(event) {
		var self = this;
		var contact = this.get("contact");
		
		event.preventDefault();
		
		contact.saveResource()
			.fail( function(e) {
				App.displayError(e);
			})
			.done(function() {
				App.contactsController.pushObject(contact);
				
			})
	}
	
	
})
