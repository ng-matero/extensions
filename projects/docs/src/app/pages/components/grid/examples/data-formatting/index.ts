import { App } from './app';

const gridDataFormattingExampleConfig = {
  title: 'Data formatting',
  description: `
  <p>The <code>name</code> field use a formatter.</p>
  `,
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/data-formatting/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/data-formatting/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/data-formatting/app.scss',
    },
  ],
};

export { gridDataFormattingExampleConfig };
