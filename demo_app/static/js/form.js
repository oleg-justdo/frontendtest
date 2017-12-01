define(['jquery','popup', 'underscore'], function ( $, Popup, _ ) {

	var module = ( function () {

	    function Form( options ) {
	        this.options = options;

	        this.init();
	    }

	    Form.prototype.init = function () {
	        _.bindAll( this, 'ajaxResponseHandle' );

	        this.registerEvents();
	    };

	   	Form.prototype.registerEvents = function()
	    {
	    	var _this = this;

	    	$( this.options.el ).on('submit', function ( ev ) {
	    		ev.preventDefault();

	    		var data = _this.parseForm( ev.target );
	    		var url = $( this ).attr( 'action' );

	    		_this.ajaxRequest( url , data ).done( _this.ajaxResponseHandle );
	    	});
	    };

	    Form.prototype.ajaxResponseHandle = function( data )
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

	    Form.prototype.parseForm = function( form )
	    {
	    	var data = {};
	    	var raw = $( form ).serialize().split('&');

	    	raw.forEach(function ( item ) {
	    		var parts = item.split( '=' );
	    		data[ parts[0] ] = parts[1];
	    	})

	    	return data;
	    };

	    Form.prototype.ajaxRequest = function( url, data, method )
	    {
	    	method = method || 'post';

	    	return $.ajax({
	    		method: method,
	    		url: url,
	    		data: data
	    	});
	    };

	    Form.prototype.showNoticeError = function( arr )
	    {
	    	( new Popup({type: 'error'}) ).render( arr.toString(), $( 'body' ) );
	    };

	    return Form;
	}());

	return module;
})