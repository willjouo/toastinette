const gulp = require('gulp');

const size = require('gulp-size');

const concat = require('gulp-concat');
const rename = require('gulp-rename');

var cleanCSS = require('gulp-clean-css');
var eslint = require('gulp-eslint');
var composer = require('gulp-uglify/composer');
var uglifyjs = require('uglify-es');
var minify = composer(uglifyjs, console);

/**
* CSS
**/
gulp.task('css', ()=>{
    return gulp.src('src/toastinette.css')
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS())
        .pipe(rename('toastinette.min.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('docs'))
        .pipe(size({showFiles: true }));
});

/**
* Lint
**/
gulp.task('lint', ()=>{
    return gulp.src('src/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

/**
 * Minify
 */
gulp.task('js', ()=>{
    return gulp.src('src/*.js')
        .pipe(concat('toastinette.js'))
        .pipe(gulp.dest('dist'))
        .pipe(minify({mangle: {
            toplevel: true,
        }}))
        .pipe(rename('toastinette.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('docs'))
        .pipe(size({showFiles: true }));
});

/**
* Default task
**/
gulp.task('default', gulp.parallel('css', 'lint', 'js'));