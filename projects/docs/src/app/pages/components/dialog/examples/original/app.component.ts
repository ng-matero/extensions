import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MtxDialog } from '@ng-matero/extensions/dialog';

@Component({
  selector: 'dialog-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatButton, NgIf],
})
export class AppComponent {
  animal?: string;

  constructor(private mtxDialog: MtxDialog) {}

  openOriginal() {
    const dialogRef = this.mtxDialog.originalOpen(DialogOriginalOverviewComponent, {
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
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatInput,
    FormsModule,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
})
export class DialogOriginalOverviewComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOriginalOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
