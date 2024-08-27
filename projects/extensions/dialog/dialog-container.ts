import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { MtxToObservablePipe } from '@dcnx/mat-extensions/core';
import { MtxDialogData } from './dialog-config';

@Component({
  selector: 'mtx-dialog-container',
  exportAs: 'mtxDialogContainer',
  templateUrl: './dialog-container.html',
  styleUrl: './dialog-container.scss',
  host: {
    class: 'mtx-dialog-container',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    MatButton,
    MatIconButton,
    MatFabButton,
    MatMiniFabButton,
    MatIcon,
    MtxToObservablePipe,
  ],
})
export class MtxDialogContainer {
  constructor(
    public dialogRef: MatDialogRef<MtxDialogContainer>,
    @Inject(MAT_DIALOG_DATA) public data: MtxDialogData
  ) {}

  _onClick(fn: () => void) {
    if (fn) {
      fn.call(this);
    }
    this._onClose();
  }

  _onClose() {
    this.dialogRef.close();
  }
}
