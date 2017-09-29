var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function () {
    gulp.src('./src/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/build/'))
})

gulp.task('watch', function () {
    gulp.watch('./src/style.css', ['style'])
})