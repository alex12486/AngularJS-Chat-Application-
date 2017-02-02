var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');


gulp.task('server', function () {
	gulp.src('app')
	.pipe(server({
		livereload: true,
		open: true
	}));
});

gulp.task('styles', function () {
	gulp.src('app/sass/**/*.sass') 
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: false
	}))
	.pipe(cssmin())
	.pipe(gulp.dest('app/css/'));
});

gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssmin()))
        .pipe(gulp.dest('public'));
});


gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', ['styles']);
});


gulp.task('default', ['server', 'watch']);