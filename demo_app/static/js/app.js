define([ 'jquery', 'underscore', 'form', 'switch', 'owl' ], function ( $, _, Form, Switch ) {

	var module = ( function () {

	    function App( options )
	    {
	        this.options = options;

	        this.init();
	    }

	    App.prototype.init = function ()
	    {
	        var initialTime = $('#timer').data( 'time' );
	        $( '.slider' ).addClass('owl-theme, owl-carousel').owlCarousel({
	        	loop: true,
    			navText: ['', ''],
    			nav: true,
	        	items: 1
	        });

	        $( '.mobile-menu-btn' ).on( 'click', function () {
	        	$( '.extra-menu' ).toggleClass( 'active--js' );
	        })

	        new Switch( { el: '.catalog-menu' } );
	        new Form({el: 'form'});

	        if( initialTime )
	        {
	        	require( ['timer'], function ( Timer ) {
	        		new Timer( {time: initialTime, el: $( '#timer' )} );
	        	})
	        }

	        this.registerEvents();
	    };

	    App.prototype.registerEvents = function()
	    {

	    };

	    return App;
	}());

	return module;
})