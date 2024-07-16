import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MtxCalendar } from './calendar';
import { MtxCalendarBody } from './calendar-body';
import { MtxClock } from './clock';
import {
  MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MtxDatetimepicker,
  MtxDatetimepickerContent,
} from './datetimepicker';
import { MtxDatetimepickerInput } from './datetimepicker-input';
import { MtxDatetimepickerToggle, MtxDatetimepickerToggleIcon } from './datetimepicker-toggle';
import { MtxMonthView } from './month-view';
import { MtxMultiYearView } from './multi-year-view';
import { MtxTime, MtxTimeInput } from './time';
import { MtxYearView } from './year-view';
import {
  MtxDateTimePickerActions,
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
    MtxTime,
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
    MtxDateTimePickerActions,
  ],
  exports: [
    MtxCalendar,
    MtxCalendarBody,
    MtxClock,
    MtxTime,
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
    MtxDateTimePickerActions,
  ],
  providers: [MTX_DATETIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
})
export class MtxDatetimepickerModule {}
