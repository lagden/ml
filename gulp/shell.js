'use strict';

const join = require('path').join;
const cp = require('child_process');
const promisify = require('lagden-promisify');

const exec = promisify(cp.exec);
const pwd = join(__dirname, '..');

function uglify() {
	return exec(join(pwd, 'bin/uglify'));
}

exports.uglify = uglify;
