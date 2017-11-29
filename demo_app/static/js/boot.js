require.config({
	paths: {
		jquery: ['//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min'],
		underscore: ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min'],
		text: ['//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'],

		app: ['app'],
		popup: ['popup'],
	},
	shim: {
		app: {
			deps: ['jquery']
		}
	}
});

require( ['app'], function ( App ) {
	new App({
		slider: '.slider',
		form: 'form'
	});
})