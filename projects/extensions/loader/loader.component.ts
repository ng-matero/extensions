import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

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
  @Input() type: 'spinner' | 'progressbar' = 'spinner';
  @Input() loading = true;
  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressSpinnerMode | ProgressBarMode = 'indeterminate';
  @Input() value = 0;
  @Input() strokeWidth = 4; // only support spinner
  @Input() diameter = 48; // only support spinner
  @Input() bufferValue = 0; // only support progresbar
  @Input() hasBackdrop = true;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}
}
