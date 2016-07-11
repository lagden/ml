'use strict';

const join = require('path').join;
const gulp = require('gulp');
const concat = require('gulp-concat');

const srcPath = join(__dirname, '..', 'src');
const devPath = join(__dirname, '..', 'dev');
const nodePath = join(__dirname, '..', 'node_modules');

const srcFiles = [
	join(nodePath, 'flickity', 'dist', 'flickity.pkgd.js'),
	join(srcPath, 'js', 'app.js')
];

function concatena() {
	return gulp
		.src(srcFiles)
		.pipe(concat('app.js'))
		.pipe(gulp.dest(join(devPath, 'js')));
}

exports.task = concatena;
