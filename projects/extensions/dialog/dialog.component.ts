import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MtxDialogData } from './dialog.config';

@Component({
  selector: 'mtx-dialog',
  exportAs: 'mtxDialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class MtxDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MtxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MtxDialogData
  ) { }

  ngOnInit() { }

  onClick(fn: () => void) {
    fn.call(this);
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }
}
