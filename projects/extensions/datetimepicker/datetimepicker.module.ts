import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatetimepickerCalendar } from './calendar';
import { MatDatetimepickerCalendarBody } from './calendar-body';
import { MatDatetimepickerClock } from './clock';
import { MatDatetimepicker, MatDatetimepickerContent } from './datetimepicker';
import { MatDatetimepickerInput } from './datetimepicker-input';
import { MatDatetimepickerToggle } from './datetimepicker-toggle';
import { MatDatetimepickerMonthView } from './month-view';
import { MatDatetimepickerYearView } from './year-view';
import { MatDatetimepickerMultiYearView } from './multi-year-view';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    OverlayModule,
    A11yModule,
  ],
  entryComponents: [MatDatetimepickerContent],
  declarations: [
    MatDatetimepickerCalendar,
    MatDatetimepickerCalendarBody,
    MatDatetimepickerClock,
    MatDatetimepicker,
    MatDatetimepickerToggle,
    MatDatetimepickerInput,
    MatDatetimepickerContent,
    MatDatetimepickerMonthView,
    MatDatetimepickerYearView,
    MatDatetimepickerMultiYearView,
  ],
  exports: [
    MatDatetimepickerCalendar,
    MatDatetimepickerCalendarBody,
    MatDatetimepickerClock,
    MatDatetimepicker,
    MatDatetimepickerToggle,
    MatDatetimepickerInput,
    MatDatetimepickerContent,
    MatDatetimepickerMonthView,
    MatDatetimepickerYearView,
    MatDatetimepickerMultiYearView,
  ],
})
export class MatDatetimepickerModule {}
