module.exports = {
  '*.ts': filenames => [
    `eslint --fix ${filenames.map(x=>`'${x}'`).join(' ')}`,
    `prettier --write ${filenames.map(x=>`'${x}'`).join(' ')}`,
  ],
  '*.scss': filenames => `stylelint --fix ${filenames.map(x=>`'${x}'`).join(' ')}`,
  '*.{html,css,js,json,md,yml}': filenames => `git add ${filenames.map(x=>`'${x}'`).join(' ')}`,
};
