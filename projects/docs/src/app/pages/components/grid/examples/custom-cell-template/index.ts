import { App } from './app';

const gridCustomCellTemplateExampleConfig = {
  title: 'Custom cell template',
  description: `
  <p>The status column are custom cells.</p>
  `,
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/custom-cell-template/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/custom-cell-template/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/custom-cell-template/app.scss',
    },
  ],
};

export { gridCustomCellTemplateExampleConfig };
