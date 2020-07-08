import { AppComponent as DialogOriginalComponent } from './app.component';
import { DialogOverviewComponent } from './app.component';

const dialogOriginalExampleConfig = {
  title: 'Material original dialog',
  component: DialogOriginalComponent,
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
    {
      file: 'dialog.html',
      content: require('!!highlight-loader?raw=true&lang=html!./dialog.html'),
      filecontent: require('!!raw-loader!./dialog.html'),
    },
  ],
};

export { DialogOriginalComponent, dialogOriginalExampleConfig, DialogOverviewComponent };
