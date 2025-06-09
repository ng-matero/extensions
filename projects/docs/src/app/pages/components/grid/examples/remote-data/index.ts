import { App } from './app';

const gridRemoteDataExampleConfig = {
  title: 'Remote Data',
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
  ],
};

export { gridRemoteDataExampleConfig };
