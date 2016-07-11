/* eslint quote-props: 0 */
'use strict';

const join = require('path').join;
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const nib = require('nib');
const rupture = require('rupture');
const autoprefixer = require('autoprefixer');
const lost = require('lost');
const watch = require('./helpers/watch');

const isDev = (process.env.NODE_ENV || 'development') === 'development';
const stylusPath = join(__dirname, '..', 'src', 'stylus');
const outPath = join(__dirname, '..', isDev ? 'dev' : 'build', 'css');

const postcssPlugins = [
	autoprefixer({
		browsers: ['last 2 versions']
	}),
	lost()
];

if (isDev === false) {
	postcssPlugins.push(cssnano({
		discardComments: {
			removeAll: true
		}
	}));
}

function css() {
	return gulp
		.src(join(stylusPath, '*.styl'))
		.pipe(stylus({
			compress: !isDev,
			'include css': true,
			use: [
				nib(),
				rupture()
			]
		}))
		.pipe(postcss(postcssPlugins))
		.pipe(gulp.dest(outPath));
}

function watchCss() {
	return watch(join(stylusPath, '**/*.styl'), css);
}

exports.task = css;
exports.watch = watchCss;
