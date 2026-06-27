import { App } from './app';

const gridHidePaginationExampleConfig = {
  title: 'Hide pagination',
  description: `
  <p>If you hide the pagination, you should set <code>pageOnFront</code> false to show all the data.
  </p>
  `,
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/hide-pagination/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/hide-pagination/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/hide-pagination/app.scss',
    },
  ],
};

export { gridHidePaginationExampleConfig };
