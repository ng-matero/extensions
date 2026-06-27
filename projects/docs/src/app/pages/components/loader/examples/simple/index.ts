import { App } from './app';

const loaderSimpleExampleConfig = {
  title: 'Simple loader',
  component: App,
  files: [
    {
      file: 'app.html',
      path: 'loader/examples/simple/app.html',
    },
    {
      file: 'app.ts',
      path: 'loader/examples/simple/app.ts',
    },
    {
      file: 'app.scss',
      path: 'loader/examples/simple/app.scss',
    },
  ],
};

export { loaderSimpleExampleConfig };
