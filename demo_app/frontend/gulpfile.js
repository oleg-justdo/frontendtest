var gulp = require("gulp");
var livereload = require("gulp-livereload");
var less = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");

var lessSrc = "./less/index.less";
var cssDest = "../static/css";

gulp.task('less', function() {
    return gulp.src(lessSrc)
        .pipe( sourcemaps.init() )
        	.pipe(rename('styles.less'))
        	.pipe(less())
        	.on('error', function ( err ) {
        		console.log( err );
        	})
        .pipe(sourcemaps.write())
        .pipe(gulp.dest( cssDest ))
        .pipe(livereload());
});

gulp.task('dev', function() {
	livereload.listen();
    gulp.watch( "./less/**/*.less", ['less'])
});