import { App } from './app';

const dialogI18nExampleConfig = {
  title: 'I18n confirmation',
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'dialog/examples/i18n/app.html',
    },
    {
      file: 'app.ts',
      path: 'dialog/examples/i18n/app.ts',
    },
    {
      file: 'app.scss',
      path: 'dialog/examples/i18n/app.scss',
    },
    {
      file: 'assets/zh-CN.json',
      path: '/projects/docs/src/assets/i18n/dialog/zh-CN.json',
    },
    {
      file: 'assets/en-US.json',
      path: '/projects/docs/src/assets/i18n/dialog/en-US.json',
    },
  ],
};

export { dialogI18nExampleConfig };
