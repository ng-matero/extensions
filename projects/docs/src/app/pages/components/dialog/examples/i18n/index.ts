import { App } from './app';

const dialogI18nExampleConfig = {
  title: 'I18n confirmation',
  component: App,
  files: [
    {
      file: 'app.html',
      content: require('!!highlight-loader?raw=true&lang=html!./app.html'),
      filecontent: require('!!raw-loader!./app.html'),
    },
    {
      file: 'app.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.ts'),
      filecontent: require('!!raw-loader!./app.ts'),
    },
    {
      file: 'app.scss',
      content: require('!!highlight-loader?raw=true&lang=scss!./app.scss'),
      filecontent: require('!!raw-loader!./app.scss'),
    },
    {
      file: 'assets/zh-CN.json',
      content: require('!!highlight-loader?raw=true&lang=json!@assets/i18n/dialog/zh-CN_json'),
      filecontent: require('!!raw-loader!@assets/i18n/dialog/zh-CN_json'),
    },
    {
      file: 'assets/en-US.json',
      content: require('!!highlight-loader?raw=true&lang=json!@assets/i18n/dialog/en-US_json'),
      filecontent: require('!!raw-loader!@assets/i18n/dialog/en-US_json'),
    },
  ],
};

export { dialogI18nExampleConfig };
