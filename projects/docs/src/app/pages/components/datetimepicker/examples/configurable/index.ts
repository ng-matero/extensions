import { AppComponent as DatetimepickerConfigurableComponent } from './app.component';

const datetimepickerConfigurableExampleConfig = {
  title: 'Configurable datetimepicker',
  component: DatetimepickerConfigurableComponent,
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
      file: 'custom-header.component.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./custom-header.component.ts'),
      filecontent: require('!!raw-loader!./custom-header.component.ts'),
    },
    {
      file: 'custom-footer.component.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./custom-footer.component.ts'),
      filecontent: require('!!raw-loader!./custom-footer.component.ts'),
    },
  ],
};

export { DatetimepickerConfigurableComponent, datetimepickerConfigurableExampleConfig };
