import { Injectable, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';

import { MtxDialogComponent } from './dialog.component';
import { MtxDialogData } from './dialog.config';

const defaults: MtxDialogData = {
  title: '',
  description: '',
  buttons: [
    {
      text: 'CLOSE',
      onClick: () => {},
    },
    {
      type: 'warn',
      text: 'OK',
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
    config: MtxDialogData,
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
          text: 'OK',
          onClick: () => onOk(),
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
          text: 'CLOSE',
          onClick: () => onClose(),
        },
        {
          type: 'warn',
          text: 'OK',
          onClick: () => onOk(),
        },
      ],
      disableClose: true,
    });
  }
}
