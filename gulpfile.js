const { src, dest, series } = require('gulp');

const SRC = 'projects/extensions';
const DEST = 'dist/extensions';

function copyRoot() {
  return src([`${SRC}/*.scss`]).pipe(dest(`${DEST}`));
}

function copyAlert() {
  return src([`${SRC}/alert/*-theme.scss`]).pipe(dest(`${DEST}/alert`));
}

function copyGrid() {
  return src([`${SRC}/data-grid/*-theme.scss`]).pipe(dest(`${DEST}/data-grid`));
}

function copyProgress() {
  return src([`${SRC}/progress/*-theme.scss`]).pipe(dest(`${DEST}/progress`));
}

function copySelect() {
  return src([`${SRC}/select/*-theme.scss`]).pipe(dest(`${DEST}/select`));
}

function copySplit() {
  return src([`${SRC}/split-pane/*-theme.scss`]).pipe(dest(`${DEST}/split-pane`));
}

exports.default = series(copyRoot, copyAlert, copyGrid, copyProgress, copySelect, copySplit);
