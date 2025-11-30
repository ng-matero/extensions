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
import { MtxMultiYearView } from './multi-year-view';
import { MtxTimeView, MtxTimeInput } from './time-view';
import { MtxYearView } from './year-view';
import {
  MtxDatetimepickerActions,
  MtxDatetimepickerApply,
  MtxDatetimepickerCancel,
  MtxDatetimepickerClear,
} from './datetimepicker-actions';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
    PortalModule,
    MatButtonModule,
    MtxCalendar,
    MtxCalendarBody,
    MtxClock,
    MtxTimeView,
    MtxTimeInput,
    MtxDatetimepicker,
    MtxDatetimepickerToggle,
    MtxDatetimepickerToggleIcon,
    MtxDatetimepickerInput,
    MtxDatetimepickerContent,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
    MtxDatetimepickerApply,
    MtxDatetimepickerCancel,
    MtxDatetimepickerClear,
    MtxDatetimepickerActions,
  ],
  exports: [
    MtxCalendar,
    MtxCalendarBody,
    MtxClock,
    MtxTimeView,
    MtxDatetimepicker,
    MtxDatetimepickerToggle,
    MtxDatetimepickerToggleIcon,
    MtxDatetimepickerInput,
    MtxDatetimepickerContent,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
    MtxDatetimepickerApply,
    MtxDatetimepickerCancel,
    MtxDatetimepickerClear,
    MtxDatetimepickerActions,
  ],
})
export class MtxDatetimepickerModule {}
