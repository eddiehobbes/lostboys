var gulp = require('gulp');

//Deletes files
var del = require('del');

//Injects file references into your index.html
var inject = require('gulp-inject')
var angularFilesort = require('gulp-angular-filesort')

//Loads files
var plugins = require('gulp-load-plugins');

//Create source maps
var sourcemaps = require('gulp-sroucemaps');

var paths = {
    scripts: 'src/**/*.js',
    styles: ['./src/**/*.css', './src/**/*.scss'],
    home: './src/fossilized/',
    targetIndex: './src/fossilized/index.html',
    build: './build',
    dist: './dist/'
};

gulp.task('index', function() {
    var target = gulp.src(paths.home + 'index.html');
    var sources = gulp.src([paths.scripts])
        .pipe(angularFilesort());

    return target.pipe(inject(sources))
        .pipe(gulp.dest(paths.distDev));
});


gulp.task('javascript', function() {
    gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.distDev));
});

//browserify

//Build css from sass

//Need to lint

//Need to uglify and rename .min

//Need to clean build

//Need to run watches

//Need to serve page

//Need to run tests



// gulp.src('./src/app/index.html')
//     .pipe(inject(
//         gulp.src(['.src/app/**/*.js'])
//         .pipe(angularFilesort())
//     ))
//     .pipe(gulp.dest('./build'));

// gulp.task('clean-dev' , function(callback) {
//     del([
//         paths.distDev
//     ], callback);
// });
//
// gulp.task('default', ['clean-dev']);
