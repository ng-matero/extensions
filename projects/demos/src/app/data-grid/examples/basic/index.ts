import { AppComponent as DataGridBasicComponent } from './app.component';

const dataGridBasicExampleConfig = {
  title: 'Basic',
  component: DataGridBasicComponent,
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
    {
      file: 'data.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!../../data.ts'),
      filecontent: require('!!raw-loader!../../data.ts'),
    },
  ],
};

export { DataGridBasicComponent, dataGridBasicExampleConfig };
