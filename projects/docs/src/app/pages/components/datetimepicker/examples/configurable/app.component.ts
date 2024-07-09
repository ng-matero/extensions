import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
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
import { CustomHeader } from './custom-header.component';
import { CustomFooter } from './custom-footer.component';

@Component({
  selector: 'datetimepicker-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
  customHeader!: any;
  customFooter!: any;

  datetime = new UntypedFormControl();

  showCustomHeader($event: MatCheckboxChange) {
    if ($event.checked) {
      this.customHeader = CustomHeader;
    } else {
      this.customHeader = null;
    }
  }
  showCustomFooter($event: MatCheckboxChange) {
    if ($event.checked) {
      this.customFooter = CustomFooter;
    } else {
      this.customFooter = null;
    }
  }
}
