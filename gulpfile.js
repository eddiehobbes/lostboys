
var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject')
var angularFilesort = require('gulp-angular-filesort')
var plugins = require('gulp-load-plugins');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var bowerFiles = require('main-bower-files');

var paths = {
    scripts: './src/**/*.js',
    css: './src/resources/**/*.css',
    sass: './src/resources/**/*.scss',
    fBower : './bower_components',
    partials: ['./src/fossilized/**/*.js', '!./src/fossilized/index.html'],
    home: './src/fossilized/',
    temp: './.temp/', // pipe dumping ground
    dist: './.dist/', // ready for distribution
    serve: './.serve/' // dev server
};

var reuse = {}

gulp.task('index', function() {
    var target = gulp.src(paths.home + 'index.html');
    var sources = gulp.src([paths.scripts])
        .pipe(gulp.dest(paths.serve))
        .pipe(angularFilesort());

    return target.pipe(inject(sources,{read:false}, {relative:true}))
        .pipe(gulp.dest(paths.serve));
});

gulp.task('js', function() {
    gulp.src(paths.scripts)
        .pipe(gulp.dest(paths.serve))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js'}))
        .pipe(gulp.dest(paths.dist))
});

//Build css from sass
gulp.task('dev-sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest(paths.serve))
});

//Need to lint
gulp.task('lint', function() {
    return gulp.src([paths.scripts])
    .pipe(eslint())
    .pipe(eslint.format());
});

//Need to uglify and rename .min

//Need to clean build
gulp.task('clean', function() {
    del([
        paths.temp + '**/*',
        paths.dist + '**/*',
        paths.serve + '**/*'
    ]);
});


//Need to run watches
gulp.task('js-watch', ['js'], browserSync.reload);

//Need to start server

//Need to reload on file changes
gulp.task('serve', ['lint', 'index', 'sass'], function() {
    browserSync.init({
      server: {
        baseDir: paths.serve
        }
    });

    gulp.watch(paths.scripts, ['js-watch']);

});

//Need to run tests
gulp.task('test', ['lint'], function() {

});
