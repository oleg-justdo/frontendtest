define([ 'jquery', 'underscore', 'popup' ], function ( $, _, Popup ) {

	var module = ( function () {

		// constructor
	    function App( options )
	    {
	        this.options = options;

	        this.init();
	    }

	    // methods
	    App.prototype.init = function ()
	    {
	        _.bindAll( this, 'ajaxResponseHandle' );

	        this.registerEvents();
	    };

	    App.prototype.registerEvents = function()
	    {
	    	var _this = this;

	    	$( 'form' ).on('submit', function ( ev ) {
	    		ev.preventDefault();

	    		var data = _this.parseForm( ev.target );
	    		var url = $( this ).attr( 'action' );

	    		_this.ajaxRequest( url , data ).done( _this.ajaxResponseHandle );
	    	})
	    };

	    App.prototype.ajaxResponseHandle = function( data )
	    {
	    	var _this = this;
	    	var dataContent = data.data[ '__all__' ];

	    	if( data.status == 'error' )
	    	{
	    		_this.showNoticeError( dataContent );

	    		return;
	    	}

	    	_this.showNotice( dataContent );
	    };

	    App.prototype.showNoticeError = function( arr )
	    {
	    	( new Popup({}) ).render( arr.toString(), $( 'body' ) );
	    };

	    App.prototype.parseForm = function( form )
	    {
	    	var data = {};
	    	var raw = $( form ).serialize().split('&');

	    	raw.forEach(function ( item ) {
	    		var parts = item.split( '=' );
	    		data[ parts[0] ] = parts[1];
	    	})

	    	return data;
	    };

	    App.prototype.ajaxRequest = function( url, data, method )
	    {
	    	method = method || 'post';

	    	return $.ajax({
	    		method: method,
	    		url: url,
	    		data: data
	    	});
	    };

	    return App;
	}());

	return module;
})