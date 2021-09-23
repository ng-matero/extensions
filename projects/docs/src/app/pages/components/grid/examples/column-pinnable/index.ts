import { AppComponent as GridColumnPinnableComponent } from './app.component';

const gridColumnPinnableExampleConfig = {
  title: 'Column pinnable',
  component: GridColumnPinnableComponent,
  description: `
  <p>The <code>name</code> and <code>weight</code> column pinned left, the <code>email</code> column
  pinned right. Scroll the columns to test.</p>
  `,
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

export { GridColumnPinnableComponent, gridColumnPinnableExampleConfig };
