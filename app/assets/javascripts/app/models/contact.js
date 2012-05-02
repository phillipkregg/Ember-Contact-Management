App.Contact = Ember.Resource.extend({
	resourceUrl:          '/contacts',
	resourceName:         'contact',
	resourceProperties: ['first_name', 'last_name', 'address', 'city', 'state', 'phone_num']
});
