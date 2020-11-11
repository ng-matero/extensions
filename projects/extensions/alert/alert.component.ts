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

@Component({
  selector: 'mtx-alert',
  exportAs: 'mtxAlert',
  host: {
    class: 'mtx-alert',
  },
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxAlertComponent {
  @HostBinding('class') get hostClassList() {
    return `mtx-alert-${this.type}`;
  }

  /** Alert types */
  @Input() type: 'default' | 'info' | 'success' | 'warning' | 'danger' = 'default';

  /** Whether alert visible */
  @Input() isOpen = true;

  /** Whether displays an inline "Close" button */
  @Input() dismissible: boolean;

  /** Text color */
  @Input() color: string;

  /** Material elevation */
  @Input() elevation = 0;

  /** This event fires when alert closed, $event is an instance of Alert component */
  @Output() closed = new EventEmitter<MtxAlertComponent>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  _onClosed(): void {
    this.isOpen = false;
    this._changeDetectorRef.markForCheck();
    this.closed.emit(this);
  }
}
