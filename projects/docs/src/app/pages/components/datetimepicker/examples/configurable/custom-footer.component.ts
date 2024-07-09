import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import {
  MtxCalendar,
  MtxCalendarView,
  MtxMonthView,
  MtxClock,
  MtxMultiYearView,
  MtxTime,
  MtxYearView,
  MtxDatetimepickerType,
  mtxDatetimepickerAnimations,
} from '@ng-matero/extensions/datetimepicker';

/** Custom footer component for datetimepicker. */
@Component({
  selector: 'custom-footer',
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        align-items: flex-end;
        justify-content: flex-end;
      }
    `,
  ],
  template: `
    @if (this.type === 'datetime' && this.currentView === 'clock') {
      <div class="mtx-calendar-buttons">
        <button mat-button type="button" (click)="handleClear()">Clear</button>
        <button mat-button type="button" (click)="handleOk()">Ok</button>
        <button mat-button type="button" (click)="handleCancel()">Cancel</button>
      </div>
    }

    @if (this.type !== 'datetime') {
      <div class="mtx-calendar-buttons">
        <button mat-button type="button" (click)="handleClear()">Clear</button>
        <button mat-button type="button" (click)="handleOk()">Ok</button>
        <button mat-button type="button" (click)="handleCancel()">Cancel</button>
      </div>
    }
  `,
  standalone: true,
  animations: [mtxDatetimepickerAnimations.slideCalendar],
  imports: [
    MatButtonModule,
    MatIconModule,
    MtxMonthView,
    MtxYearView,
    MtxMultiYearView,
    MtxTime,
    MtxClock,
  ],
})
export class CustomFooter<D> {
  constructor(
    private _calendar: MtxCalendar<D>,
    private _adapter: DatetimeAdapter<D>
  ) {}

  get currentView(): MtxCalendarView {
    return this._calendar.currentView;
  }

  get type(): MtxDatetimepickerType {
    return this._calendar.type;
  }

  handleOk() {
    switch (this._calendar.type) {
      case 'time':
        if (this._calendar._activeDate) {
          this._calendar.preventEmittingSameDateSelection(this._calendar._activeDate);
          this._calendar._userSelection.emit();
        }
        break;
      case 'month':
        if (this._calendar._activeDate) {
          this._calendar.preventEmittingSameDateSelection(this._calendar._activeDate);
          this._calendar._userSelection.emit();
        }
        break;
      case 'year':
        if (this._calendar._activeDate) {
          if (
            !this._adapter.sameYear(this._calendar._activeDate, this._calendar.selected as D) ||
            !this._calendar.preventSameDateTimeSelection
          ) {
            const normalizedDate = this._adapter.createDatetime(
              this._adapter.getYear(this._calendar._activeDate),
              0,
              1,
              0,
              0
            );
            this._calendar.selectedChange.emit(normalizedDate);
          }
          this._calendar._userSelection.emit();
        }
        break;
      case 'date':
        if (this._calendar._activeDate) {
          this._calendar.preventEmittingSameDateSelection(this._calendar._activeDate);
          this._calendar._userSelection.emit();
        }
        break;
      case 'datetime':
        if (this._calendar._activeDate) {
          if (this.currentView !== 'clock') {
            this._calendar._dateSelected(this._calendar._activeDate);
          } else {
            this._calendar.preventEmittingSameDateSelection(this._calendar._activeDate);
            this._calendar._userSelection.emit();
          }
        }
        break;
      default:
        // Optionally handle other cases or do nothing
        break;
    }
  }

  handleClear() {
    this._calendar.selectedChange.emit();
    this._calendar.selected = null;
    this._calendar._activeDate = this._adapter.today();
  }

  handleCancel() {
    this._calendar._userSelection.emit();
  }
}
