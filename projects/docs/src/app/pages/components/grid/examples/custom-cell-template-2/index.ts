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

export { gridCustomCellTemplate2ExampleConfig };
