import { App } from './app';

const gridColumnHidingMovingExampleConfig = {
  title: 'Column hiding & moving',
  description: `
  <p>Click the <kbd>Column Shown</kbd> button, you can select or drag the columns.</p>
  `,
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/column-hiding-moving/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/column-hiding-moving/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/column-hiding-moving/app.scss',
    },
  ],
};

export { gridColumnHidingMovingExampleConfig };
