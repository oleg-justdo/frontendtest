define([], function () {

	var module = ( function () {

		// constructor
	    function Tmp( options ) {
	        this.options = options;
	    }

	    // methods
	    Tmp.prototype.init = function () {
	        console.log( this.options );
	    };

	    return Tmp;
	}());

	return module;
})