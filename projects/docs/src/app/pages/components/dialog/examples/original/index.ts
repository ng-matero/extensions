import { App } from './app';

const dialogOriginalExampleConfig = {
  title: 'Material original dialog',
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
      file: 'dialog.html',
      content: require('!!highlight-loader?raw=true&lang=html!./dialog.html'),
      filecontent: require('!!raw-loader!./dialog.html'),
    },
  ],
};

export { dialogOriginalExampleConfig };
