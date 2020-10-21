const { src, dest, series } = require('gulp');

const SRC = 'projects/extensions';
const DEST = 'dist/extensions';

function copyRoot() {
  return src([`${SRC}/*.scss`]).pipe(dest(`${DEST}`));
}

function copyAlert() {
  return src([`${SRC}/alert/*.scss`]).pipe(dest(`${DEST}/alert`));
}

function copyButton() {
  return src([`${SRC}/button/*.scss`]).pipe(dest(`${DEST}/button`));
}

function copyGrid() {
  return src([`${SRC}/data-grid/*.scss`]).pipe(dest(`${DEST}/data-grid`));
}

function copyLoader() {
  return src([`${SRC}/loader/*.scss`]).pipe(dest(`${DEST}/loader`));
}

function copyPopover() {
  return src([`${SRC}/popover/*.scss`]).pipe(dest(`${DEST}/popover`));
}

function copyProgress() {
  return src([`${SRC}/progress/*.scss`]).pipe(dest(`${DEST}/progress`));
}

function copySelect() {
  return src([`${SRC}/select/*.scss`]).pipe(dest(`${DEST}/select`));
}

function copySplit() {
  return src([`${SRC}/split-pane/*.scss`]).pipe(dest(`${DEST}/split-pane`));
}

exports.default = series(
  copyRoot,
  copyAlert,
  copyButton,
  copyGrid,
  copyLoader,
  copyPopover,
  copyProgress,
  copySelect,
  copySplit
);
