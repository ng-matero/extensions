import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MtxDialog } from '@dcnx/mat-extensions/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dev-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrl: './dialog-demo.component.scss',
  standalone: true,
  imports: [MatButtonModule],
})
export class DialogDemoComponent implements OnInit {
  animal?: string;

  constructor(
    private mtxDialog: MtxDialog,
    public translate: TranslateService
  ) {}

  ngOnInit() {}

  alert() {
    this.mtxDialog.alert(`My name is Zongbin!`, '', () => {
      this.mtxDialog.alert(`Glad to meet you!`);
    });
  }

  confirm() {
    this.mtxDialog.confirm(
      `What's your name?`,
      '',
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
          text: this.translate.stream('close'),
          onClick: () => {
            this.mtxDialog.alert(`You click Close button.`);
          },
        },
        {
          color: 'primary',
          text: this.translate.stream('view'),
          onClick: () => {
            this.mtxDialog.alert(`You click View button.`);
          },
        },
        {
          color: 'warn',
          text: this.translate.stream('ok'),
          focusInitial: true,
          onClick: () => {
            this.mtxDialog.alert(`You click Ok button.`);
          },
        },
      ],
      showCloseIcon: true,
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
  selector: 'dev-dialog-overview',
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
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
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
