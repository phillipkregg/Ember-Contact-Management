App.NewContactView = Ember.View.extend({
	tagName:        'form',
	templateName:   'app/templates/contacts/edit',
	
	init: function() {
		this._super();
		this.set("contact", App.Contact.create());
		
	},
	
	didInsertElement: function() {
    this._super();
    this.$().hide().fadeIn('fast');
  },
	
	cancelForm: function() {
		this.get("parentView").hideNew();
	}
	
	
})
