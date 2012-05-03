App.EditContactView = Ember.View.extend({
	tagName:       'form',	
	templateName:  'app/templates/contacts/edit',
	
	init: function() {
		this._super();
		
		//this.set("contact", this.get('parentView').get('contact').copy());
		alert("Edit View");
		var contact = this.get("contact");
		
		if (contact !== undefined) {
			this.set("contact", contact.findResource());
			alert(contact.id + "is the Edit resource")
		} else {
			this.set("contact", App.Contact.create());
		}
		
		
		//alert(contact.name + "is the Edit resource")
			//$(this).hide().fadeIn();
	},
	
	cancelForm: function() {
		this.get("parentView").hideEdit();
	},
	
	submit:  function() {
		var self = this;
		var contact = this.get("contact");
		
		event.preventDefault();
		
		contact.saveResource()
			.fail( function(e) {
				App.displayError(e);
			})
			.done(function() {
				var parentView = self.get("parentView");
				parentView.get("contact").duplicateProperties(contact);
				parentView.hideEdit();
			});
	}
});
