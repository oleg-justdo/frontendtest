define([ 'jquery', 'underscore', 'text!tpl/popup.html' ], function ( $, _, popupTpl ) {

	var module = ( function () {

		// constructor
	    function Popup( options ) {
	        this.options = options;
	        this.template = _.template( popupTpl );

	        this.init();
	    }

	    // methods
	    Popup.prototype.init = function ()
	    {

	    };

	    Popup.prototype.registerEvents = function( el )
	    {
	    	el.on('click', function ( ev ) {
	    		ev.preventDefault();
	    	})

	    	$( 'body').on( 'click', function () {
				el.remove();
	    	})
	    };

	    Popup.prototype.render = function( data, dest )
	    {
	    	var popup = $( this.template( { content: data } ) ).appendTo( dest );

	    	this.registerEvents( popup );
	    };

	    return Popup;
	}());

	return module;
})