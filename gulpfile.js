const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const webpack = require('webpack-stream');
const child = require('child_process');
const help = require('gulp-task-listing');
const del = require('del');
const eslint = require('gulp-eslint');

gulp.task('help', help);

// //////////////////////////////////////
// BUILDING
// //////////////////////////////////////

const BUILD_TARGET_DIR = './';

gulp.task('default', ['build']);

gulp.task('build', function () {
  return gulp.src('lib/**/*.js')
    .pipe(webpack(require('./support/webpack.config.js')))
    .pipe(gulp.dest(BUILD_TARGET_DIR));
});

// //////////////////////////////////////
// TESTING
// //////////////////////////////////////

const TEST_FILE = './test/index.js';
const MOCHA_OPTS = {
  reporter: 'dot',
  require: ['./test/support/server.js'],
  bail: true
};
const FILES_TO_CLEAN = [
  'test/support/public/engine.io.js'
];

gulp.task('test', ['lint'], function () {
  if (process.env.hasOwnProperty('BROWSER_NAME')) {
    return testZuul();
  } else {
    return testNode();
  }
});

gulp.task('lint', function () {
  return gulp.src([
    '**/*.js',
    '!node_modules/**',
    '!coverage/**',
    '!engine.io.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

function cleanFiles (globArray) {
  return del.sync(globArray);
}

gulp.task('istanbul-pre-test', function () {
  return gulp.src(['lib/**/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test-cov', ['istanbul-pre-test'], function () {
  return gulp.src(TEST_FILE)
    .pipe(mocha(MOCHA_OPTS))
    .pipe(istanbul.writeReports())
    .once('error', function (err) {
      cleanFiles(FILES_TO_CLEAN);
      console.error(err.stack);
      process.exit(1);
    })
    .once('end', function () {
      cleanFiles(FILES_TO_CLEAN);
      process.exit();
    });
});
