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
      content: require('!!highlight-loader?raw=true&lang=html!./app.html'),
      filecontent: require('!!raw-loader!./app.html'),
    },
    {
      file: 'app.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.ts'),
      filecontent: require('!!raw-loader!./app.ts'),
    },
    {
      file: 'app.scss',
      content: require('!!highlight-loader?raw=true&lang=scss!./app.scss'),
      filecontent: require('!!raw-loader!./app.scss'),
    },
  ],
};

export { gridCustomHeaderTemplateExampleConfig };
