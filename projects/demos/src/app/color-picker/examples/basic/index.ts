import { AppComponent as ColorPickerBasicComponent } from './app.component';

const colorPickerBasicExampleConfig = {
  title: 'Basic',
  description: `
  <p>
    <code>mtx-color-picker</code> has used Chrome picker style of <code>ngx-color</code>, it can't
    change the picker style now.
  </p>
  `,
  component: ColorPickerBasicComponent,
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
    }
  ],
};

export { ColorPickerBasicComponent, colorPickerBasicExampleConfig };
