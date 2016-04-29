var gulp=require('gulp');
var cleanCSS=require('gulp-clean-css');
var sourcemaps=require('gulp-sourcemaps');
var sass=require('gulp-ruby-sass');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var compass=require('gulp-compass');
gulp.task('default', function(){
  return gulp.src('./static/css/*.css')
             .pipe(sourcemaps.init())
             .pipe(cleanCSS())
             .pipe(sourcemaps.write('./maps')) //will be in ./build/static/css/maps
             .pipe(gulp.dest('./build/static/css/'));
});


gulp.task('sass', function(){
  return sass('./1.scss')
             .on('error', sass.logError)
             .pipe(gulp.dest('./scss'));
});

gulp.task('minjs', function(){
  return gulp.src('./*.js')
             .pipe(uglify())
             .pipe(gulp.dest('./minjs'));

});

gulp.task('concat', function(){
  return gulp.src('./*.js')
             .pipe(concat('all.min.js'))
             .pipe(gulp.dest('./all/'));
});

gulp.task('compass', function(){
  return gulp.src('./sass/*.scss')
             .pipe(compass({
               config_file: './config.rb',
               css: 'stylesheets',
               sass: 'sass'
             }))
             .pipe(gulp.dest('stylesheets'))
});

gulp.task('watch', function(){
  gulp.watch('./sass/*.scss', ['compass']);
});





