define([ 'jquery', 'underscore', 'form', 'catalogMenuDropdown', 'owl' ],
	function ( $, _, Form, CatalogMenuDropdown ) {

	var module = ( function () {

	    function App( options )
	    {
	        this.options = options;

	        this.init();
	    }

	    App.prototype.init = function ()
	    {
	        var initialTime = $('#timer').data( 'time' );
	        $( '.slider' ).owlCarousel({
	        	loop: true,
	        	dots: true,
    			navText: ['', ''],
    			nav: true,
	        	items: 1
	        });

	        $( '.mobile-menu-btn' ).on( 'click', function () {
	        	$( '.extra-menu' ).toggleClass( 'active--js' );
	        })

	        new CatalogMenuDropdown( { el: '.catalog-menu' } );
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