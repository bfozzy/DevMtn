var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {

    gulp.src('./src/sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));

});

gulp.watch('./src/sass/**/*.scss', ['sass']);

gulp.task('default', ['sass']);