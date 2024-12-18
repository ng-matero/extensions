import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { MtxToObservablePipe } from '@ng-matero/extensions/core';
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
  imports: [AsyncPipe, MatButton, MatIconButton, MatIcon, MtxToObservablePipe],
})
export class MtxDialogContainer {
  dialogRef = inject<MatDialogRef<MtxDialogContainer>>(MatDialogRef);
  data = inject<MtxDialogData>(MAT_DIALOG_DATA);

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
