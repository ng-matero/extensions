import { Component, Inject } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animal: string;

  constructor(private mtxDialog: MtxDialog) { }

  openOriginal() {
    const dialogRef = this.mtxDialog.originalOpen(DialogOverviewComponent, {
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
})
export class DialogOverviewComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
