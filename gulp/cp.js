'use strict';

const join = require('path').join;
const gulp = require('gulp');

const isDev = (process.env.NODE_ENV || 'development') === 'development';
const srcPath = join(__dirname, '..', 'src');
const outPath = join(__dirname, '..', isDev ? 'dev' : 'build');

function copy(src, dest) {
	return gulp
		.src(src)
		.pipe(gulp.dest(dest));
}

exports.list = {
	favicon: {
		src: join(srcPath, 'images', 'ico', 'favicon.ico'),
		dest: join(outPath)
	},
	assets: {
		src: join(srcPath, '..', 'node_modules', 'chico', 'dist', 'assets', '**', '*'),
		dest: join(outPath, 'assets')
	}
};

exports.task = copy;
