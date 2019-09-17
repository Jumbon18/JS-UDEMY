const gulp = require('gulp');
const  autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const  config = {
  path:{
      scss:'./src/scss/**/*.scss',
      html:'./public/index.html'
  },
    output:{
      cssName:'bundle.min.css',
        path:'./public'
    }
};

gulp.task('scss',function () {
    return gulp.src(config.path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path));
});


gulp.task('default',['scss']);