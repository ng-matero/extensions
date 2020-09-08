import { AppComponent as DialogI18nComponent } from './app.component';

const dialogI18nExampleConfig = {
  title: 'I18n confirmation',
  component: DialogI18nComponent,
  files: [
    {
      file: 'app.component.html',
      content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'),
      filecontent: require('!!raw-loader!./app.component.html'),
    },
    {
      file: 'app.component.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'),
      filecontent: require('!!raw-loader!./app.component.ts'),
    },
    {
      file: 'app.component.scss',
      content: require('!!highlight-loader?raw=true&lang=scss!./app.component.scss'),
      filecontent: require('!!raw-loader!./app.component.scss'),
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

export { DialogI18nComponent, dialogI18nExampleConfig };
