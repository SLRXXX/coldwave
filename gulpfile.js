/*
* @Author: slr
* @Date:   2016-03-20 09:01:11
* @Last Modified by:   slr
* @Last Modified time: 2016-03-27 11:32:21
*/

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var combiner = require('stream-combiner2');

var jsList = [
    'js/jquery-1.12.2.min.js',
    'js/jquery.slimscroll.js',
    'js/jquery.fullPage.js',
    'js/echarts.js',
    'js/data.js',
    'js/geoCoordMap.js',
    'js/myCharts.js',
    'js/cursor.js',
    'js/index.js'
];

// 压缩js库
gulp.task('zipjs', function () {
    gulp.src(jsList)
     .pipe(concat('script.js'))
     .pipe(uglify())
     .pipe(gulp.dest('js'));
});


gulp.task('watch', function () {
    return gulp.watch(jsList, ['zipjs']);
});

gulp.task('default', ['watch']);