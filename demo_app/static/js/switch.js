define([], function () {

	var module = ( function () {

	    function Switch( options ) {
	        this.options = options;

	        this.init();
	    }

	    Switch.prototype.init = function () {
	    	var _this = this;

        	$( this.options.el ).on('click', function (ev) {
	    		$( this ).toggleClass( 'active--js' );

		    	$( 'body' ).on( 'click', function () {
		    		if( $( _this.options.el ).hasClass('active--js') )
		    		{
		    			$( _this.options.el ).toggleClass( 'active--js' );
		    		}
		    	});

	    		return false;
	    	});
	    };

	    return Switch;
	}());

	return module;
})