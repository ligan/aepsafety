Router.map(function() {
	this.route('Login', {
		path: '/login',
		layoutTemplate: 'layout_accounts'
	});

	this.route('Home', {
		path: '/',
		onBeforeAction: function() {
			if(!Meteor.userId()) {
				Router.go('Login');
			} else {
				this.next();
			}
		},
		layoutTemplate: 'layout'
	});
});