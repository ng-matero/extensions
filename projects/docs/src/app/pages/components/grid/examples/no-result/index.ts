import { App } from './app';

const gridNoResultExampleConfig = {
  title: 'No result',
  description: `
  <p>You can use <code>[noResultTemplate]="noResultTpl"</code> to customize it.</p>
  `,
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/no-result/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/no-result/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/no-result/app.scss',
    },
  ],
};

export { gridNoResultExampleConfig };
