var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('hello', function() {
  console.log('Hello Zell');
});


gulp.task('sass', function(){
  return gulp.src('src/scss/alceona.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/css'))
    .pipe(gulp.dest('src/css'))
});
