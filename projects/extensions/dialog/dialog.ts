import { Injectable, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
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
  width: '300px',
};

@Injectable()
export class MtxDialog {
  constructor(public dialog: MatDialog) {}

  originalOpen(
    componentOrTemplateRef: ComponentType<any> | TemplateRef<any> = MtxDialogComponent,
    config: any
  ) {
    return this.dialog.open(componentOrTemplateRef, config);
  }

  open(
    config: DialogData,
    componentOrTemplateRef: ComponentType<any> | TemplateRef<any> = MtxDialogComponent
  ) {
    const data = Object.assign({}, defaults, config);
    return this.dialog.open(componentOrTemplateRef, {
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
      disableClose: true,
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
      disableClose: true,
    });
  }
}
