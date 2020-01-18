import { Component, OnInit, Inject } from '@angular/core';

import { MtxDialog } from '@ng-matero/extensions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss'],
})
export class DialogDemoComponent implements OnInit {
  animal: string;

  constructor(private mtxDialog: MtxDialog) {}

  ngOnInit() {}

  alert() {
    this.mtxDialog.alert(`My name is Zongbin!`, () => {
      this.mtxDialog.alert(`Glad to meet you!`);
    });
  }

  confirm() {
    this.mtxDialog.confirm(
      `What's your name?`,
      () => {
        this.mtxDialog.alert(`Hi, Zongbin!`);
      },
      () => {
        this.mtxDialog.alert(`I don't know.`);
      }
    );
  }

  open() {
    this.mtxDialog.open({
      title: 'This is the title',
      description: 'You can write some messages here.',
      buttons: [
        {
          type: '',
          text: 'Close',
          onClick: () => {
            this.mtxDialog.alert(`You click Close button.`);
          },
        },
        {
          type: 'primary',
          text: 'View',
          onClick: () => {
            this.mtxDialog.alert(`You click View button.`);
          },
        },
        {
          type: 'warn',
          text: 'Ok',
          onClick: () => {
            this.mtxDialog.alert(`You click Ok button.`);
          },
        },
      ],
    });
  }

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
  template: `
    <h1 mat-dialog-title>Hi, {{ data.name }}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.animal" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
    </div>
  `,
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
