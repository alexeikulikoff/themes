var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var watch = require('gulp-watch');

gulp.task('sass', function(){
  return gulp.src('scss/alceona.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
    
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']); 
 
})