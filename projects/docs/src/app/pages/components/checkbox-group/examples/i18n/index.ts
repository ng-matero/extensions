import { App } from './app';

const checkboxGroupI18nExampleConfig = {
  title: 'I18n ngx-translate',
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
      content: require('!!highlight-loader?raw=true&lang=json!@assets/i18n/checkbox-group/zh-CN_json'),
      filecontent: require('!!raw-loader!@assets/i18n/checkbox-group/zh-CN_json'),
    },
    {
      file: 'assets/en-US.json',
      content: require('!!highlight-loader?raw=true&lang=json!@assets/i18n/checkbox-group/en-US_json'),
      filecontent: require('!!raw-loader!@assets/i18n/checkbox-group/en-US_json'),
    },
  ],
};

export { checkboxGroupI18nExampleConfig };
