import { App } from './app';

const gridRowSelectableExampleConfig = {
  title: 'Row selectable',
  description: `
  <p>If you choose the multiple option, you can press <kbd>ctrl</kbd>/<kbd>command</kbd> +
  click or select checkboxs to choose multiple rows.</p>
  `,
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

export { gridRowSelectableExampleConfig };
