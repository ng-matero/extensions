import { App } from './app';

const loaderConfigurableExampleConfig = {
  title: 'Configurable loader',
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'loader/examples/configurable/app.html',
    },
    {
      file: 'app.ts',
      path: 'loader/examples/configurable/app.ts',
    },
    {
      file: 'app.scss',
      path: 'loader/examples/configurable/app.scss',
    },
  ],
};

export { loaderConfigurableExampleConfig };
