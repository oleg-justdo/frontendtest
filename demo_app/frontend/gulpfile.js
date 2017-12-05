var gulp = require("gulp");
var livereload = require("gulp-livereload");
var less = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var minifyCss = require('gulp-clean-css');

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


gulp.task('minify-css', () => {
  return gulp.src( cssDest + '/styles.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest( cssDest ));
});

gulp.task('dev', function() {
	livereload.listen();
    gulp.watch( "./less/**/*.less", ['less'])
});