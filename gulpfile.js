/*var gulp = require ('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function(){
	gulp.watch('*.scss', ['sass']);
});*/

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
});

gulp.task('sass', function(){
	return gulp.src('app/sass/styles.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});