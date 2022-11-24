import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { E } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxAmPM } from './calendar';
import { MtxClockView } from './clock';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';

type TimeI18nLabels = {
  confirmBtn: string;
  cancelBtn: string;
};

@Component({
  selector: 'mtx-time',
  templateUrl: 'time.html',
  styleUrls: ['time.scss'],
  exportAs: 'mtxTime',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.mtx-time]': 'true',
  },
})
export class MtxTime<D> implements OnChanges, AfterViewInit {
  /** Emits when the currently selected date changes. */
  @Output() readonly selectedChange = new EventEmitter<D>();

  /** Emits when any date changes. */
  @Output() readonly activeDateChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Emits when AM/PM button are clicked. */
  @Output() readonly ampmChange = new EventEmitter<MtxAmPM>();

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Step over minutes. */
  @Input() interval: number = 1;

  @Input() i18nLabels: TimeI18nLabels = {
    cancelBtn: 'Cancel',
    confirmBtn: 'Ok',
  };

  @ViewChild('hourInput')
  private hourInputElement: ElementRef | undefined;

  @ViewChild('minuteInput')
  private minuteInputElement: ElementRef | undefined;

  /** Whether the clock uses 12 hour format. */
  @Input()
  get twelvehour(): boolean {
    return this._twelvehour;
  }
  set twelvehour(value: boolean) {
    this._twelvehour = coerceBooleanProperty(value);
  }
  private _twelvehour = false;

  /** Whether the time is now in AM or PM. */
  @Input()
  AMPM: MtxAmPM = 'AM';

  /**
   * The date to display in this clock view.
   */
  @Input()
  get activeDate(): D {
    return this._activeDate;
  }
  set activeDate(value: D) {
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
  }
  private _activeDate!: D;

  /** The currently selected date. */
  @Input()
  get selected(): D | null {
    return this._selected;
  }
  set selected(value: D | null) {
    this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    if (this._selected) {
      this.activeDate = this._selected;
    }
  }
  private _selected!: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null {
    return this._minDate;
  }

  set minDate(value: D | null) {
    this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _minDate!: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null {
    return this._maxDate;
  }
  set maxDate(value: D | null) {
    this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _maxDate!: D | null;

  /** Whether the clock should be started in hour or minute view. */
  @Input()
  get clockView() {
    return this._clockView;
  }
  set clockView(value: MtxClockView) {
    this._clockView = value;
  }
  /** Whether the clock is in hour view. */
  private _clockView: MtxClockView = 'hour';

  get isHourView() {
    return this._clockView === 'hour';
  }

  get isMinuteView() {
    return this._clockView === 'hour';
  }

  constructor(private _adapter: DatetimeAdapter<D>) {}

  ngOnChanges(changes: SimpleChanges): void {
    // when clockView changes by input we should focus the correct input
    if (changes.clockView) {
      if (changes.clockView.currentValue !== changes.clockView.previousValue) {
        this.focusInputElement();
      }
    }
  }

  ngAfterViewInit(): void {
    this.focusInputElement();
  }

  focusInputElement() {
    if (this.clockView === 'hour') {
      if (this.hourInputElement) {
        (this.hourInputElement.nativeElement as HTMLInputElement).focus();
      }
    } else {
      if (this.minuteInputElement) {
        (this.minuteInputElement.nativeElement as HTMLInputElement).focus();
      }
    }
  }

  _timeSelected(date: D): void {
    if (this.clockView === 'hour') {
      this.clockView = 'minute';
    } else {
      // this.clockView = 'hour';
    }
    this.selected = date;
  }

  _onActiveDateChange(date: D) {
    this._activeDate = date;
    this.activeDateChange.emit(date);
  }

  confirm() {
    if (this._selected) {
      this.selectedChange.emit(this._selected);
    }
    this._userSelection.emit();
  }

  cancel() {
    this._userSelection.emit();
  }

  static ngAcceptInputType_twelvehour: BooleanInput;
}
