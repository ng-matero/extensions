import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MtxDialog } from '@ng-matero/extensions/dialog';

@Component({
  selector: 'dialog-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MatButtonModule],
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
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
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
