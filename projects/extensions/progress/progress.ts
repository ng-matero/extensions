import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';

export type MtxProgressType = 'default' | 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'mtx-progress',
  exportAs: 'mtxProgress',
  host: {
    'class': 'mtx-progress',
    '[style.height]': 'height',
    '[style.backgroundColor]': 'background',
  },
  templateUrl: './progress.html',
  styleUrl: './progress.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxProgress {
  /** The progress's type. Can be `default`, `info`, `success`, `warning` or `danger`. */
  @Input() type: MtxProgressType = 'default';

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
  @Input({ transform: booleanAttribute }) striped = false;

  /** Whether to apply the animated class. */
  @Input({ transform: booleanAttribute }) animate = false;
}
