import { AppComponent as DataGridRowSelectableComponent } from './app.component';

const dataGridRowSelectableExampleConfig = {
  title: 'Row selectable',
  description: `
  <p>If you choose multiple option, you can press <kbd>ctrl</kbd>/<kbd>command</kbd> +
  click or select checkboxs to choose multiple row.</p>
  `,
  component: DataGridRowSelectableComponent,
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

export { DataGridRowSelectableComponent, dataGridRowSelectableExampleConfig };
