import { App } from './app';

const gridCustomCellTemplate2ExampleConfig = {
  title: 'Custom cell template 2',
  description: `
  <p>There has another easiest way to custom cells. You can use property
  <code>[cellTemplate]="{ mobile: mobileTpl, city: cityTpl }"</code>,
  the key of cellTemplate is the column field.</p>
  `,
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/custom-cell-template-2/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/custom-cell-template-2/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/custom-cell-template-2/app.scss',
    },
  ],
};

export { gridCustomCellTemplate2ExampleConfig };
