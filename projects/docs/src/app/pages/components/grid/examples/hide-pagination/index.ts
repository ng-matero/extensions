import { AppComponent as GridHidePaginationComponent } from './app.component';

const gridHidePaginationExampleConfig = {
  title: 'Hide pagination',
  description: `
  <p>If you hide the pagination, you should set <code>pageOnFront</code> false to show all the data.
  </p>
  `,
  component: GridHidePaginationComponent,
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

export { GridHidePaginationComponent, gridHidePaginationExampleConfig };
