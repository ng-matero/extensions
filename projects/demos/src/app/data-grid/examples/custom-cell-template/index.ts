import { AppComponent as DataGridCustomCellTemplateComponent } from './app.component';

const dataGridCustomCellTemplateExampleConfig = {
  title: 'Custom cell template',
  description: `
  <p>The status column are custom cells.</p>
  `,
  component: DataGridCustomCellTemplateComponent,
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

export { DataGridCustomCellTemplateComponent, dataGridCustomCellTemplateExampleConfig };
