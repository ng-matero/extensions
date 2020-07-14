import { Component, Inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MtxDialogData } from './dialog.config';

@Component({
  selector: 'mtx-dialog',
  exportAs: 'mtxDialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MtxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MtxDialogData
  ) {}

  _onClick(fn: () => void) {
    fn.call(this);
    this._onClose();
  }

  _onClose() {
    this.dialogRef.close();
  }
}
