import { AppComponent as GridCustomCellTemplate2Component } from './app.component';

const gridCustomCellTemplate2ExampleConfig = {
  title: 'Custom cell template 2',
  description: `
  <p>There has another easiest way to custom cells. You can use property
  <code>[cellTemplate]="{ mobile: mobileTpl, city: cityTpl }"</code>,
  the key of cellTemplate is the column field.</p>
  `,
  component: GridCustomCellTemplate2Component,
  files: [
    {
      file: 'app.component.html',
      content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'),
      filecontent: require('!!raw-loader!./app.component.html'),
    },
    {
      file: 'app.component.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'),
      filecontent: require('!!raw-loader!./app.component.ts'),
    },
    {
      file: 'app.component.scss',
      content: require('!!highlight-loader?raw=true&lang=scss!./app.component.scss'),
      filecontent: require('!!raw-loader!./app.component.scss'),
    },
  ],
};

export { GridCustomCellTemplate2Component, gridCustomCellTemplate2ExampleConfig };
