import { App } from './app';

const gridCustomHeaderTemplateExampleConfig = {
  title: 'Custom header template',
  description: `
  <p>If you just want to append something to header, you can try
  <code>[headerExtraTemplate]</code> instead.</p>
  `,
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'grid/examples/custom-header-template/app.html',
    },
    {
      file: 'app.ts',
      path: 'grid/examples/custom-header-template/app.ts',
    },
    {
      file: 'app.scss',
      path: 'grid/examples/custom-header-template/app.scss',
    },
  ],
};

export { gridCustomHeaderTemplateExampleConfig };
