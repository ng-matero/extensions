import { AppComponent as GridNoResultComponent } from './app.component';

const gridNoResultExampleConfig = {
  title: 'No result',
  description: `
  <p>You can use <code>[noResultTemplate]="noResultTpl"</code> to customize it.</p>
  `,
  component: GridNoResultComponent,
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

export { GridNoResultComponent, gridNoResultExampleConfig };
