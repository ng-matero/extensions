import { App } from './app';

const gridColumnPinnableExampleConfig = {
  title: 'Column pinnable',
  component: App,
  description: `
  <p>The <code>name</code> and <code>weight</code> column pinned left, the <code>email</code> column
  pinned right. Scroll the columns to test.</p>
  `,
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

export { gridColumnPinnableExampleConfig };
