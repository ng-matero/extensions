import { AppComponent as GridI18nComponent } from './app.component';

const gridI18nExampleConfig = {
  title: 'I18n ngx-translate',
  component: GridI18nComponent,
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
      content: require('!!highlight-loader?raw=true&lang=json!@assets/i18n/data-grid/zh-CN_json'),
      filecontent: require('!!raw-loader!@assets/i18n/data-grid/zh-CN_json'),
    },
    {
      file: 'assets/en-US.json',
      content: require('!!highlight-loader?raw=true&lang=json!@assets/i18n/data-grid/en-US_json'),
      filecontent: require('!!raw-loader!@assets/i18n/data-grid/en-US_json'),
    },
  ],
};

export { GridI18nComponent, gridI18nExampleConfig };
