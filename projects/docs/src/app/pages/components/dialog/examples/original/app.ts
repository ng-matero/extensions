import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MtxDialog } from '@ng-matero/extensions/dialog';

@Component({
  selector: 'dialog-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule],
})
export class App {
  private mtxDialog = inject(MtxDialog);

  animal?: string;

  openOriginal() {
    const dialogRef = this.mtxDialog.originalOpen(DialogOriginalOverviewDialog, {
      width: '550px',
      data: { name: 'nzbin', animal: 'panda' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview',
  templateUrl: './dialog.html',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
})
export class DialogOriginalOverviewDialog {
  dialogRef = inject<MatDialogRef<DialogOriginalOverviewDialog>>(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
