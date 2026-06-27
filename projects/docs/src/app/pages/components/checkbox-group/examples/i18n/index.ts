import { App } from './app';

const checkboxGroupI18nExampleConfig = {
  title: 'I18n ngx-translate',
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'checkbox-group/examples/i18n/app.html',
    },
    {
      file: 'app.ts',
      path: 'checkbox-group/examples/i18n/app.ts',
    },
    {
      file: 'app.scss',
      path: 'checkbox-group/examples/i18n/app.scss',
    },
    {
      file: 'assets/zh-CN.json',
      path: '/projects/docs/src/assets/i18n/checkbox-group/zh-CN.json',
    },
    {
      file: 'assets/en-US.json',
      path: '/projects/docs/src/assets/i18n/checkbox-group/en-US.json',
    },
  ],
};

export { checkboxGroupI18nExampleConfig };
