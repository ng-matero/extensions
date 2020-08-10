const { src, dest, series } = require('gulp');

const SRC = 'projects/extensions';
const DEST = 'dist/extensions';

function copyRoot() {
  return src([`${SRC}/*.scss`]).pipe(dest(`${DEST}`));
}

function copyGrid() {
  return src([`${SRC}/data-grid/*-theme.scss`]).pipe(dest(`${DEST}/data-grid`));
}

function copySelect() {
  return src([`${SRC}/select/*-theme.scss`]).pipe(dest(`${DEST}/select`));
}

function copySplit() {
  return src([`${SRC}/split-pane/*-theme.scss`]).pipe(dest(`${DEST}/split-pane`));
}

exports.default = series(copyRoot, copyGrid, copySelect, copySplit);
