App.Contact = Ember.Resource.extend({
	resourceUrl:          '/contacts',
	resourceName:         'contact',
	resourceProperties: ['first_name', 'last_name', 'address', 'city', 'state', 'phone_num'],

	validate: function() {
		if (this.get('first_name') === undefined || this.get('first_name') === '' ||
			this.get('last_name') === undefined  || this.get('last_name') === '') {
			return 'Contacts require a first and a last name.';
			}
		}

});
