import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export type MtxLoaderType = 'spinner' | 'progressbar';

@Component({
  selector: 'mtx-loader',
  exportAs: 'mtxLoader',
  host: {
    'class': 'mtx-loader',
    '[class.mtx-loader-loading]': 'loading',
  },
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxLoaderComponent {
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
  @Input()
  get loading(): boolean {
    return this._loading;
  }
  set loading(value: boolean) {
    this._loading = coerceBooleanProperty(value);
  }
  private _loading = true;

  /** Whether the loader has a backdrop. */
  @Input()
  get hasBackdrop(): boolean {
    return this._hasBackdrop;
  }
  set hasBackdrop(value: boolean) {
    this._hasBackdrop = coerceBooleanProperty(value);
  }
  private _hasBackdrop = true;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  static ngAcceptInputType_loading: BooleanInput;
  static ngAcceptInputType_hasBackdrop: BooleanInput;
}
