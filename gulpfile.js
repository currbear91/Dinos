var gulp = require('gulp');  
var sass = require('gulp-ruby-sass');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');


gulp.task('js', function() {
  return gulp.src('public/js/script.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    return sass('sass/style.scss', {
        sourcemap: true,
        style: 'compressed',
        loadPath: ['node_modules/susy/sass']
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
	gulp.watch('public/js/**/*', ['js']);
	gulp.watch(['sass/**/*'], ['sass']);
});

gulp.task('webserver', ['watch', 'sass'], function() {
    gulp.src('public/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'sass', 'webserver']);
