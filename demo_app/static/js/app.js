define([ 'jquery', 'underscore', 'form', 'switch' ], function ( $, _, Form, Switch ) {

	var module = ( function () {

	    function App( options )
	    {
	        this.options = options;

	        this.init();
	    }

	    App.prototype.init = function ()
	    {
	        var initialTime = $('#timer').data( 'time' );

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