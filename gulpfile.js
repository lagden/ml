'use strict';

const gulp = require('gulp');
const concat = require('./gulp/concat');
const jade = require('./gulp/jade');
const stylus = require('./gulp/stylus');
const cp = require('./gulp/cp');
const shell = require('./gulp/shell');

gulp.task('default', gulp.parallel(
	cp.task.bind(cp, cp.list.favicon.src, cp.list.favicon.dest),
	cp.task.bind(cp, cp.list.assets.src, cp.list.assets.dest),
	concat.task,
	jade.task,
	stylus.task
));

gulp.task('watch', gulp.parallel(
	'default',
	jade.watch,
	stylus.watch
));

gulp.task('build', gulp.series(
	'default',
	shell.uglify
));
