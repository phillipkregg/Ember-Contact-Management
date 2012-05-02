App.EditContactView = Ember.View.extend({
	tagName:       'form',
	classNames:     ['well'],
	templateName:  'app/templates/contacts/edit',
	
	init: function() {
		this._super();
		
		this.set("contact", this.get('parentView').get('contact').copy());
			$(this).hide().fadeIn();
	},
	
	cancelForm: function() {
		this.get("parentView").hideEdit();
	}
	
})
