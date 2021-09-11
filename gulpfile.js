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

function copyDatetimepicker() {
  return src([`${SRC}/datetimepicker/*.scss`]).pipe(dest(`${DEST}/datetimepicker`));
}

function copyDataGrid() {
  return src([`${SRC}/data-grid/*.scss`]).pipe(dest(`${DEST}/data-grid`));
}

function copyDataGridColumnResize() {
  return src([`${SRC}/data-grid/column-resize/*.scss`]).pipe(
    dest(`${DEST}/data-grid/column-resize`)
  );
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

function copyTooltip() {
  return src([`${SRC}/tooltip/*.scss`]).pipe(dest(`${DEST}/tooltip`));
}

function copyFormGroup() {
  return src([`${SRC}/form-group/*.scss`]).pipe(dest(`${DEST}/form-group`));
}

function copyText3d() {
  return src([`${SRC}/text3d/*.scss`]).pipe(dest(`${DEST}/text3d`));
}

exports.default = series(
  copyRoot,

  copyAlert,
  copyButton,
  copyDatetimepicker,
  copyDataGrid,
  copyDataGridColumnResize,
  copyLoader,
  copyPopover,
  copyProgress,
  copySelect,
  copySplit,
  copyTooltip,

  copyFormGroup,
  copyText3d
);
