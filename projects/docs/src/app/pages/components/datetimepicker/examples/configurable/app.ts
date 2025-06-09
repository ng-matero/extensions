import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { provideMomentDatetimeAdapter } from '@ng-matero/extensions-moment-adapter';
import {
  MtxCalendarView,
  MtxDatetimepickerMode,
  MtxDatetimepickerModule,
  MtxDatetimepickerType,
} from '@ng-matero/extensions/datetimepicker';
import { CustomHeader } from './custom-header';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'datetimepicker-configurable-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MtxDatetimepickerModule,
  ],
  providers: [
    provideMomentDatetimeAdapter({
      parse: {
        dateInput: 'YYYY-MM-DD',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        timeInput: 'HH:mm',
        datetimeInput: 'YYYY-MM-DD HH:mm',
      },
      display: {
        dateInput: 'YYYY-MM-DD',
        monthInput: 'MMMM',
        yearInput: 'YYYY',
        timeInput: 'HH:mm',
        datetimeInput: 'YYYY-MM-DD HH:mm',
        monthYearLabel: 'YYYY MMMM',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
        popupHeaderDateLabel: 'MMM DD, ddd',
      },
    }),
  ],
})
export class App {
  type: MtxDatetimepickerType = 'datetime';
  mode: MtxDatetimepickerMode = 'auto';
  startView: MtxCalendarView = 'month';
  multiYearSelector = false;
  touchUi = false;
  twelvehour = false;
  timeInterval = 1;
  timeInput = true;
  timeInputAutoFocus = true;
  customHeader!: any;
  actionButtons = false;
  showWeekNumbers = false;

  datetime = '';

  showCustomHeader($event: MatCheckboxChange) {
    if ($event.checked) {
      this.customHeader = CustomHeader;
    } else {
      this.customHeader = null;
    }
  }
}
