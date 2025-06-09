import { App } from './app';

const gridBasicExampleConfig = {
  title: 'Basic',
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
      file: 'data.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!../../data.ts'),
      filecontent: require('!!raw-loader!../../data.ts'),
    },
  ],
};

export { gridBasicExampleConfig };
