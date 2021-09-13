import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

export type MtxProgressType = 'default' | 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'mtx-progress',
  exportAs: 'mtxProgress',
  host: {
    'class': 'mtx-progress',
    '[style.height]': 'height',
    '[style.backgroundColor]': 'background',
  },
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxProgressComponent {
  /** The progress type */
  @Input() type: MtxProgressType = 'info';

  /** The progress value */
  @Input() value = 0;

  /** The progress height */
  @Input() height!: string;

  /** The progress text color */
  @Input() color!: string;

  /** The progress bar color */
  @Input() foreground!: string;

  /** The progress track color */
  @Input() background!: string;

  /** Whether applies striped class */
  @Input()
  get striped(): boolean {
    return this._striped;
  }
  set striped(value: boolean) {
    this._striped = coerceBooleanProperty(value);
  }
  private _striped = false;

  /** Whether applies animated class */
  @Input()
  get animate(): boolean {
    return this._animate;
  }
  set animate(value: boolean) {
    this._animate = coerceBooleanProperty(value);
  }
  private _animate = false;

  static ngAcceptInputType_striped: BooleanInput;
  static ngAcceptInputType_animate: BooleanInput;
}
