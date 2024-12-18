import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';

export type MtxAlertType = 'default' | 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'mtx-alert',
  exportAs: 'mtxAlert',
  host: {
    'class': 'mtx-alert',
    '[class.mtx-alert-dismissible]': 'dismissible',
    'role': 'alert',
  },
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconButton],
})
export class MtxAlert {
  private _changeDetectorRef = inject(ChangeDetectorRef);

  @HostBinding('class')
  get _hostClassList() {
    return `mtx-alert-${this.type} mat-elevation-z${this.elevation}`;
  }

  /** The alert's type. Can be `default`, `info`, `success`, `warning` or `danger`. */
  @Input() type: MtxAlertType = 'default';

  /** Whether to display an inline close button. */
  @Input({ transform: booleanAttribute }) dismissible = false;

  /** The alert's elevation (0~24). */
  @Input() elevation = 0;

  /** Event emitted when the alert closed. */
  @Output() closed = new EventEmitter<MtxAlert>();

  _onClosed(): void {
    this._changeDetectorRef.markForCheck();
    this.closed.emit(this);
  }
}
