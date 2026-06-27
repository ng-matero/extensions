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
      path: 'grid/examples/row-selectable/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/row-selectable/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/row-selectable/app.scss',
    },
  ],
};

export { gridRowSelectableExampleConfig };
