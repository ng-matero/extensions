import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  HostBinding,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

export type MtxAlertType = 'default' | 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'mtx-alert',
  exportAs: 'mtxAlert',
  host: {
    '[class.mtx-alert]': 'true',
    '[class.mtx-alert-dismissible]': 'dismissible',
    'role': 'alert',
  },
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxAlertComponent {
  @HostBinding('class')
  get _hostClassList() {
    return `mtx-alert-${this.type} mat-elevation-z${this.elevation}`;
  }

  /** The alert's type. Can be `default`, `info`, `success`, `warning` or `danger`. */
  @Input() type: MtxAlertType = 'default';

  /** Whether to display an inline close button. */
  @Input()
  get dismissible(): boolean {
    return this._dismissible;
  }
  set dismissible(value: boolean) {
    this._dismissible = coerceBooleanProperty(value);
  }
  private _dismissible = false;

  /** The alert's elevation (0~24). */
  @Input() elevation = 0;

  /** Event emitted when the alert closed. */
  @Output() closed = new EventEmitter<MtxAlertComponent>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  _onClosed(): void {
    this._changeDetectorRef.markForCheck();
    this.closed.emit(this);
  }

  static ngAcceptInputType_dismissible: BooleanInput;
}
