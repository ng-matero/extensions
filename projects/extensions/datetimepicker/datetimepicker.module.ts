import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MtxCalendar } from './calendar';
import { MtxCalendarBody } from './calendar-body';
import { MtxClock } from './clock';
import { MtxDatetimepicker, MtxDatetimepickerContent } from './datetimepicker';
import { MtxDatetimepickerInput } from './datetimepicker-input';
import { MtxDatetimepickerToggle } from './datetimepicker-toggle';
import { MtxMonthView } from './month-view';
import { MtxYearView } from './year-view';
import { MtxMultiYearView } from './multi-year-view';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    OverlayModule,
    A11yModule,
  ],
  entryComponents: [MtxDatetimepickerContent],
  declarations: [
    MtxCalendar,
    MtxCalendarBody,
    MtxClock,
    MtxDatetimepicker,
    MtxDatetimepickerToggle,
    MtxDatetimepickerInput,
    MtxDatetimepickerContent,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
  ],
  exports: [
    MtxCalendar,
    MtxCalendarBody,
    MtxClock,
    MtxDatetimepicker,
    MtxDatetimepickerToggle,
    MtxDatetimepickerInput,
    MtxDatetimepickerContent,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
  ],
})
export class MtxDatetimepickerModule {}
