import { AppComponent as DataGridCustomHeaderTemplateComponent } from './app.component';

const dataGridCustomHeaderTemplateExampleConfig = {
  title: 'Custom header template',
  description: `
  <p>If you just want to append something to header, you can try
  <code>[headerExtraTemplate]</code> instead.</p>
  `,
  component: DataGridCustomHeaderTemplateComponent,
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

export { DataGridCustomHeaderTemplateComponent, dataGridCustomHeaderTemplateExampleConfig };
