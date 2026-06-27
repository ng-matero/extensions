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
      path: 'grid/examples/column-pinnable/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/column-pinnable/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/column-pinnable/app.scss',
    },
  ],
};

export { gridColumnPinnableExampleConfig };
