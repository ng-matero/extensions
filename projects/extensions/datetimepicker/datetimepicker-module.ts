import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MtxCalendar } from './calendar';
import { MtxCalendarBody } from './calendar-body';
import { MtxClock } from './clock';
import { MtxDatetimepicker, MtxDatetimepickerContent } from './datetimepicker';
import { MtxDatetimepickerInput } from './datetimepicker-input';
import { MtxDatetimepickerToggle, MtxDatetimepickerToggleIcon } from './datetimepicker-toggle';
import { MtxMonthView } from './month-view';
import { MtxYearView } from './year-view';
import { MtxMultiYearView } from './multi-year-view';

@NgModule({
  imports: [CommonModule, MatButtonModule, OverlayModule, A11yModule, PortalModule],
  entryComponents: [MtxDatetimepickerContent],
  declarations: [
    MtxCalendar,
    MtxCalendarBody,
    MtxClock,
    MtxDatetimepicker,
    MtxDatetimepickerToggle,
    MtxDatetimepickerToggleIcon,
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
    MtxDatetimepickerToggleIcon,
    MtxDatetimepickerInput,
    MtxDatetimepickerContent,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
  ],
})
export class MtxDatetimepickerModule {}
