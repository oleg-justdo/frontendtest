require.config({
	paths: {
		jquery: ['//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min'],
		underscore: ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min'],
		text: ['//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'],
		domReady: ['//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady'],
		owl: ['//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min'],

		app: ['app'],
		popup: 'popup',
		timer: 'timer',
		switch: 'switch',
		form: 'form'
	},
	shim: {
		app: {
			deps: ['jquery']
		}
	}
});

require( ['app', 'domReady'], function ( App ) {
	new App({
		slider: '.slider',
		form: 'form'
	});
})