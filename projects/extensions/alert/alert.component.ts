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
  @HostBinding('class') get hostClassList() {
    return `mtx-alert-${this.type} mat-elevation-z${this.elevation}`;
  }

  /** The alert type */
  @Input() type: MtxAlertType = 'default';

  /** Whether displays an inline "Close" button */
  @Input() dismissible!: boolean;

  /** The alert text color */
  @Input() color!: string;

  /** Material elevation */
  @Input() elevation = 0;

  /** This event fires when alert closed, $event is an instance of Alert component */
  @Output() closed = new EventEmitter<MtxAlertComponent>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  _onClosed(): void {
    this._changeDetectorRef.markForCheck();
    this.closed.emit(this);
  }
}
