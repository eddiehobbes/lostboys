
var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject')
var angularFilesort = require('gulp-angular-filesort')
var plugins = require('gulp-load-plugins');
// var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

var paths = {
    scripts: 'src/**/*.js',
    home: './src/fossilized/',
    targetIndex: './src/fossilized/index.html',
    build: './build',
    sass: './src/resources/**/*.scss',
    finalCSS: './serve/',
    dist: './dist/',
    serveTarget: './serve/'
};

gulp.task('index', function() {
    var target = gulp.src(paths.home + 'index.html');
    var sources = gulp.src([paths.scripts])
        .pipe(angularFilesort());

    return target.pipe(inject(sources))
        .pipe(gulp.dest(paths.serveTarget));
});

gulp.task('javascript', function() {
    gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.distDev));
});

gulp.task('js', function() {
    gulp.src(paths.scripts)
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest(paths.distDev));
});

//browserify

//Build css from sass
gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest(paths.finalCSS))
});


//Need to lint
gulp.task('lint', function() {
    return gulp.src([paths.scripts])
    .pipe(eslint())
    .pipe(eslint.format());
})

//Need to uglify and rename .min

//Need to clean build

//Need to run watches
gulp.task('js-watch', ['js'], browserSync.reload);

//Need to start server

//Need to reload on file changes
gulp.task('serve', ['lint', 'index', 'sass'], function() {
    browserSync.init({
      server: {
        baseDir: paths.serveTarget
        }
    });

    gulp.watch(paths.scripts, ['js-watch']);

});

//Need to run tests
gulp.task('test', ['lint'], function() {

});
