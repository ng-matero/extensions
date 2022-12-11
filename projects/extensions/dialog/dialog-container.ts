import { Component, Inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MtxDialogData } from './dialog-config';

@Component({
  selector: 'mtx-dialog-container',
  exportAs: 'mtxDialogContainer',
  templateUrl: './dialog-container.html',
  styleUrls: ['./dialog-container.scss'],
  host: {
    class: 'mtx-dialog-container',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
