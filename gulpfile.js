
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const serve = require('gulp-nodemon');

gulp.task('build:js', function() {
    return gulp.src('/server/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist'))
});




