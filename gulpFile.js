const gulp = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync");
const { stream } = require("browser-sync");
const imagemin = require("gulp-imagemin");
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');


function style() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browsersync.reload({ stream: true }));
}

function minifyCss(){
  return gulp.src('./dist/css/main.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('./dist/css'));
}


function compress() {
  return gulp
    .src("./src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img/"));
}

//script paths
var jsFiles = 'src/js/**/*.js',
    jsDest = 'dist/js';

function scripts(){
  return gulp.src(jsFiles)
  .pipe(concat('scripts.js'))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest));
}

function watch() {
  browsersync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch("./src/sass/**/*.scss", style);
  gulp.watch("./dist/css/main.css", minifyCss);
  gulp.watch("./src/img/**",compress);
  gulp.watch("./src/js/**/*.js",scripts);
  gulp.watch("./dist/*.html").on("change", browsersync.reload);
}

exports.style = style;
exports.watch = watch;
exports.compress = compress;
exports.scripts = scripts;
exports.minifyCss = minifyCss;
