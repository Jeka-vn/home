'use strict';
// variables
var gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require("gulp-rename"),
concatCss = require('gulp-concat-css');

// task
gulp.task('sass', function() {
	return gulp.src('app/**/*.scss')
	.pipe(sass().on('error', sass.logError))
							// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
							.pipe(gulp.dest('./css'));
						});

gulp.task('rename', function() {
	gulp.src('css/sass/*.css')
	.pipe(rename('style.css'))
	.pipe(gulp.dest("./css/"));
});

				//  watch
				
				gulp.task('default', function() {
					gulp.watch('app/**/*.scss', ['sass']);
					gulp.watch('css/sass/*.css', ['rename']);
				});
