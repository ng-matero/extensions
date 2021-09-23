import { AppComponent as GridDataFormattingComponent } from './app.component';

const gridDataFormattingExampleConfig = {
  title: 'Data formatting',
  description: `
  <p>The <code>name</code> field use a formatter.</p>
  `,
  component: GridDataFormattingComponent,
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

export { GridDataFormattingComponent, gridDataFormattingExampleConfig };
