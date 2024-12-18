import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
  booleanAttribute,
  inject,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressBar, ProgressBarMode } from '@angular/material/progress-bar';
import { MatProgressSpinner, ProgressSpinnerMode } from '@angular/material/progress-spinner';

export type MtxLoaderType = 'spinner' | 'progressbar';

@Component({
  selector: 'mtx-loader',
  exportAs: 'mtxLoader',
  host: {
    'class': 'mtx-loader',
    '[class.mtx-loader-loading]': 'loading',
  },
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressSpinner, MatProgressBar],
})
export class MtxLoader {
  private _changeDetectorRef = inject(ChangeDetectorRef);

  /** The loader's type. Can be `spinner` or `progressbar` */
  @Input() type: MtxLoaderType = 'spinner';

  /** Theme color palette for the component. */
  @Input() color: ThemePalette = 'primary';

  /** Mode of the progress circle or the progress bar. */
  @Input() mode: ProgressSpinnerMode | ProgressBarMode = 'indeterminate';

  /** Stroke width of the spinner loader. */
  @Input() strokeWidth = 4;

  /** The diameter of the spinner loader (will set width and height of svg). */
  @Input() diameter = 48;

  /** Buffer value of the progressbar loader. */
  @Input() bufferValue = 0;

  /** Value of the progress circle or the progress bar. */
  @Input() value = 0;

  /** Whether the loader is loading. */
  @Input({ transform: booleanAttribute }) loading = true;

  /** Whether the loader has a backdrop. */
  @Input({ transform: booleanAttribute }) hasBackdrop = true;
}
