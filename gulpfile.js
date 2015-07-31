//Notes
// See if basedir works with files outside of it (probably does)
// Copy the index file to .serve
// inject relative to .serve/index.html

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
var mainBowerFiles = require('main-bower-files');
var print = require('gulp-print');
var debug = require('gulp-debug');
var es = require('event-stream');
var karma = require('karma').server;


var paths = {
    baseResources: './src/resources',
    serveSource: 'fossilized',
    scripts: './src/**/*.js',
    css: './src/resources/**/*.css',
    sass: './src/resources/**/*.scss',
    partials: ['./src/**/*.html', '!./src/fossilized/index.html'],
    home: './src/fossilized/',
    allFiles: '**/*',
    serveCss: 'styles/**/*.css',
    temp: './.temp/', // pipe dumping ground
    dist: './.dist/', // ready for distribution
    serve: '.serve/', // dev server
    jsFiles: '**/*.js',
    cssFiles: '**/*.css',
    allFiles: '**/*',
    karmaCfg: 'karma.conf.js',
    bowerFolder: 'bower_components'
};

gulp.task('index', ['js', 'sass'], function() {
    var target = gulp.src(paths.home + 'index.html')
        .pipe(gulp.dest(paths.serve));

    var css = gulp.src(paths.serveCss, {relative: true, cwd: paths.serve});

    var sources = gulp.src([
        serveSource + paths.jsFiles
    ], {relative: true, cwd: paths.serve})
        .pipe(angularFilesort())

    var vendor = gulp.src(mainBowerFiles({paths: { bowerDirectory: 'bower_components', bowerJson: 'bower.json', bowerrc: '.bowerrc'}}), { cwd: paths.serve});

    return target.pipe(inject(es.merge(sources, vendor, css)))
        .pipe(gulp.dest(paths.serve));
});

gulp.task('js', ['partials'], function() {
    gulp.src(paths.scripts)
        .pipe(gulp.dest(paths.serve))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js'}))
        .pipe(gulp.dest(paths.dist))

    gulp.src(paths.bowerFolder + '/' + paths.allFiles)
        .pipe(gulp.dest(paths.serve + '/' + paths.bowerFolder));
});

gulp.task('bowertest', function() {

});

gulp.task('partials', function() {
    gulp.src(paths.partials)
        .pipe(print())
        .pipe(gulp.dest(paths.serve));
})

//Build css from sass
gulp.task('sass', function() {
  return gulp.src(paths.sass, {base: baseResources})
    .pipe(sass())
    .pipe(gulp.dest(paths.serve))
});

//Need to lint
gulp.task('lint', function() {
    return gulp.src([paths.scripts])
    .pipe(eslint())
    .pipe(eslint.format());
});

//Need to clean build
gulp.task('clean', function() {
    del([
        paths.temp + paths.allFiles,
        paths.dist + paths.allFiles,
        paths.serve + paths.allFiles
    ]);
});


//Need to run watches
//Need to reload on file changes
gulp.task('js-watch', ['index'], browserSync.reload);

//Need to start server
gulp.task('serve', ['lint', 'index'], function() {
    browserSync.init({
      server: {
          baseDir: paths.serve
        }
    });
    gulp.watch(paths.scripts, ['clean', 'test', 'js-watch']);
});

//Need to run tests
gulp.task('test', ['lint'], function() {
    karma.start({
        configFile: paths.karmaCfg,
        singleRun: true
    })
});
