import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CanColor, mixinColor } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export type MtxLoaderType = 'spinner' | 'progressbar';

// Boilerplate for applying mixins to _MtxLoaderComponentBase.
/** @docs-private */
const _MtxLoaderComponentBase = mixinColor(
  class {
    constructor(public _elementRef: ElementRef) {}
  }
);

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
  inputs: ['color'],
})
export class MtxLoaderComponent extends _MtxLoaderComponentBase implements CanColor {
  @Input() type: MtxLoaderType = 'spinner';

  @Input() mode: ProgressSpinnerMode | ProgressBarMode = 'indeterminate';

  /** Only support `spinner` type */
  @Input() strokeWidth = 4;

  /** Only support `spinner` type */
  @Input() diameter = 48;

  /** Only support `progresbar` type */
  @Input() bufferValue = 0;

  @Input() value = 0;

  @Input()
  get loading(): boolean {
    return this._loading;
  }
  set loading(value: boolean) {
    this._loading = coerceBooleanProperty(value);
  }
  private _loading = true;

  @Input()
  get hasBackdrop(): boolean {
    return this._hasBackdrop;
  }
  set hasBackdrop(value: boolean) {
    this._hasBackdrop = coerceBooleanProperty(value);
  }
  private _hasBackdrop = true;

  constructor(elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) {
    super(elementRef);
  }

  static ngAcceptInputType_loading: BooleanInput;
  static ngAcceptInputType_hasBackdrop: BooleanInput;
}
