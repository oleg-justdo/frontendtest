define(['jquery'], function ( $ ) {

	var module = ( function () {

		// constructor
	    function CatalogMenuDropdown( options ) {
	        this.options = options;
	        this.selector = options.el;
	        this.el = $( this.selector );

	        this.init();
	    }

	    // methods
	    CatalogMenuDropdown.prototype.init = function () {
			var _this = this;

        	$( this.selector + '__title').on('click', function (ev) {

	    		_this.el.toggleClass( 'active--js' );

		    	$( 'body' ).on( 'click', function ( ev ) {
		    		if( !$( ev.target ).parents( _this.selector ).length )
		    		{
			    		_this.el.removeClass( 'active--js' );
		    		}
		    	});

	    		return false;
	    	});

	    	$( this.selector + '__link' ).on( 'click', function ( ev ) {
	    		_this.el.toggleClass( 'active--js' );
	    	})
	    };

	    return CatalogMenuDropdown;
	}());

	return module;
})