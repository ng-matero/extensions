import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MtxDialogComponent } from './dialog.component';
import { DialogData } from './dialog.config';

const defaults: DialogData = {
  title: '',
  description: '',
  buttons: [
    {
      type: '',
      text: 'Close',
      onClick: () => {},
    },
    {
      type: 'warn',
      text: 'Ok',
      onClick: () => {},
    },
  ],
  disableClose: true,
  width: '300px',
};

@Injectable()
export class MtxDialog {
  constructor(public dialog: MatDialog) {}

  open(config: DialogData) {
    const data = Object.assign({}, defaults, config);

    this.dialog.open(MtxDialogComponent, {
      ...data,
      data,
    });
  }

  alert(title: string, onOk = () => {}) {
    this.open({
      title,
      buttons: [
        {
          type: 'warn',
          text: 'Ok',
          onClick: () => {
            onOk();
          },
        },
      ],
    });
  }

  confirm(title: string, onOk = () => {}, onClose = () => {}) {
    this.open({
      title,
      buttons: [
        {
          type: '',
          text: 'Close',
          onClick: () => {
            onClose();
          },
        },
        {
          type: 'warn',
          text: 'Ok',
          onClick: () => {
            onOk();
          },
        },
      ],
    });
  }
}
