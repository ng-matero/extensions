import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  MtxCalendarView,
  MtxDatetimepickerMode,
  MtxDatetimepickerType,
} from '@ng-matero/extensions/datetimepicker';
import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';

@Component({
  selector: 'datetimepicker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          timeWithSecondsInput: 'HH:mm:ss',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          datetimeWithSecondsInput: 'YYYY-MM-DD HH:mm:ss',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          yearInput: 'YYYY',
          timeInput: 'HH:mm',
          timeWithSecondsInput: 'HH:mm:ss',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          datetimeWithSecondsInput: 'YYYY-MM-DD HH:mm:ss',
          monthYearLabel: 'YYYY MMMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          popupHeaderDateLabel: 'MMM DD, ddd',
        },
      },
    },
  ],
})
export class AppComponent {
  type: MtxDatetimepickerType = 'datetime';
  mode: MtxDatetimepickerMode = 'auto';
  startView: MtxCalendarView = 'month';
  multiYearSelector = false;
  touchUi = false;
  twelvehour = false;
  timeInterval = 1;
  timeInput = true;

  datetime = new UntypedFormControl();
}
