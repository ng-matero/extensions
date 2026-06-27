import { App } from './app';

const gridI18nExampleConfig = {
  title: 'I18n ngx-translate',
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/i18n/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/i18n/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/i18n/app.scss',
    },
    {
      file: 'assets/zh-CN.json',
      path: '/projects/docs/src/assets/i18n/data-grid/zh-CN.json',
    },
    {
      file: 'assets/en-US.json',
      path: '/projects/docs/src/assets/i18n/data-grid/en-US.json',
    },
  ],
};

export { gridI18nExampleConfig };
