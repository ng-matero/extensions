import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { provideMomentDatetimeAdapter } from '@ng-matero/extensions-moment-adapter';
import {
  MtxCalendarView,
  MtxDatetimepicker,
  MtxDatetimepickerInput,
  MtxDatetimepickerMode,
  MtxDatetimepickerToggle,
  MtxDatetimepickerType,
} from '@ng-matero/extensions/datetimepicker';

@Component({
  selector: 'datetimepicker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatSlider,
    MatSliderThumb,
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    MtxDatetimepicker,
    MtxDatetimepickerInput,
    MtxDatetimepickerToggle,
  ],
  providers: [
    provideMomentDateAdapter(),
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
