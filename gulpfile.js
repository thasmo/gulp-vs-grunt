// gulpfile.js

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Default
gulp.task('default', ['build', 'watch']);

// Build
gulp.task('build', ['styles', 'scripts']);

// Styles
gulp.task('styles', function() {
	return gulp.src('source/style/main.scss')
		.pipe($.plumber())
		.pipe($.sass())
		.pipe($.autoprefixer({browsers: ['last 2 versions', 'ie 9', 'firefox esr']}))
		.pipe($.cssnano())
		.pipe(gulp.dest('build/style/'));
});

// Scripts
gulp.task('scripts', function() {
	return gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/js/dist/*.js', 'source/script/main.js'])
		.pipe($.plumber())
		.pipe($.concat('main.js'))
		.pipe($.uglify())
		.pipe(gulp.dest('build/script/'));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('source/style/main.scss', ['styles']);
	gulp.watch('source/script/main.js', ['scripts']);
});
