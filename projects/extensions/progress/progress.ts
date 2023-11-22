import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

export type MtxProgressType = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'mtx-progress',
  exportAs: 'mtxProgress',
  host: {
    'class': 'mtx-progress',
    '[style.height]': 'height',
    '[style.backgroundColor]': 'background',
  },
  templateUrl: './progress.html',
  styleUrls: ['./progress.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxProgress {
  /** The progress's type. Can be `info`, `success`, `warning` or `danger`. */
  @Input() type?: MtxProgressType;

  /** The value of the progress. */
  @Input() value = 0;

  /** The height of the progress. */
  @Input() height!: string;

  /** The text color of the progress. */
  @Input() color!: string;

  /** The bar color of the progress. */
  @Input() foreground!: string;

  /** The track color of the progress. */
  @Input() background!: string;

  /** Whether to apply the striped class. */
  @Input()
  get striped(): boolean {
    return this._striped;
  }
  set striped(value: boolean) {
    this._striped = coerceBooleanProperty(value);
  }
  private _striped = false;

  /** Whether to apply the animated class. */
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
