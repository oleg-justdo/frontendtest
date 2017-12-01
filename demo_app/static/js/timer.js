define(['jquery'], function () {
	var module = ( function () {
	    // constructor
	    function Timer(options) {
	        this.options = options;
	        this.init();
	    }

	    // methods
	    Timer.prototype.init = function() {
	        this.time = this.parseDate(new Date(this.options.time * 1000 ));
	        this.el = this.options.el;

	        setInterval(this.render.bind(this), 1000);

	        this.render();
	    };

	    Timer.prototype.parseDate = function(date) {
	        return {
	            h: this.options.h = date.getHours(),
	            m: this.options.m = date.getMinutes(),
	            s: this.options.s = date.getSeconds(),
	        }
	    };

	    Timer.prototype.getTic = function() {
	        // debugger;
	        if (this.options.s == 59) {
	            this.options.m++;
	            this.options.s = 0;
	        } else {
	            this.options.s++;
	        }

	        if (this.options.m == 59) {
	            this.options.h++;
	            this.options.m = 0;
	        }

	        if (this.options.h == 23) {
	            this.options.h = 0;
	        }

	        return [
	            this.options.h,
	            this.options.m,
	            this.options.s
	        ].map(function(part) {
	            return ('' + part).length == 1 ? '0' + part : part;
	        }).join(' : ');
	    };

	    Timer.prototype.render = function() {

	        this.el.html(this.getTic());
	    };

    	return Timer;
	}());

	return module;
});
