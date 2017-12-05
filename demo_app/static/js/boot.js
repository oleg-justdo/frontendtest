require.config({
	paths: {
		jquery: ['vendor/jquery'],
		underscore: ['vendor/underscore'],
		text: ['vendor/text'],
		domReady: ['vendor/domReady'],
		owl: ['vendor/owl.carousel'],

		app: ['app'],
		popup: 'popup',
		timer: 'timer',
		form: 'form',
		catalogMenuDropdown: 'catalogMenuDropdown',
	},
	shim: {
		app: {
			deps: ['jquery']
		},
	}
});

require( ['app', 'domReady'], function ( App ) {
	new App({
		slider: '.slider',
		form: 'form'
	});
})