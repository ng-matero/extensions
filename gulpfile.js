const { src, dest, series } = require('gulp');

const SRC = 'projects/extensions';
const DEST = 'dist/extensions';

function copyRoot() {
  return src([`${SRC}/*.scss`]).pipe(dest(`${DEST}`));
}

function copyCoreDensity() {
  return src([`${SRC}/core/density/**`]).pipe(dest(`${DEST}/core/density`));
}

function copyCoreStyle() {
  return src([`${SRC}/core/style/**`]).pipe(dest(`${DEST}/core/style`));
}

function copyCoreTheming() {
  return src([`${SRC}/core/theming/**`]).pipe(dest(`${DEST}/core/theming`));
}

function copyCoreTypography() {
  return src([`${SRC}/core/typography/**`]).pipe(dest(`${DEST}/core/typography`));
}

function copyAlert() {
  return src([`${SRC}/alert/*.scss`]).pipe(dest(`${DEST}/alert`));
}

function copyButton() {
  return src([`${SRC}/button/*.scss`]).pipe(dest(`${DEST}/button`));
}

function copyColorpicker() {
  return src([`${SRC}/colorpicker/*.scss`]).pipe(dest(`${DEST}/colorpicker`));
}

function copyDatetimepicker() {
  return src([`${SRC}/datetimepicker/*.scss`]).pipe(dest(`${DEST}/datetimepicker`));
}

function copyDrawer() {
  return src([`${SRC}/drawer/*.scss`]).pipe(dest(`${DEST}/drawer`));
}

function copyGrid() {
  return src([`${SRC}/grid/*.scss`]).pipe(dest(`${DEST}/grid`));
}

function copyGridColumnResize() {
  return src([`${SRC}/grid/column-resize/*.scss`]).pipe(dest(`${DEST}/grid/column-resize`));
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

function copySlider() {
  return src([`${SRC}/slider/*.scss`]).pipe(dest(`${DEST}/slider`));
}

function copySplit() {
  return src([`${SRC}/split/*.scss`]).pipe(dest(`${DEST}/split`));
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

  copyCoreDensity,
  copyCoreStyle,
  copyCoreTheming,
  copyCoreTypography,

  copyAlert,
  copyButton,
  copyColorpicker,
  copyDatetimepicker,
  copyDrawer,
  copyGrid,
  copyGridColumnResize,
  copyLoader,
  copyPopover,
  copyProgress,
  copySelect,
  copySlider,
  copySplit,
  copyTooltip,

  copyFormGroup,
  copyText3d
);
