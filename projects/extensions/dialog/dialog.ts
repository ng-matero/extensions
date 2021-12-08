import { Injectable, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';

import { MtxDialogComponent } from './dialog.component';
import { MtxDialogData } from './dialog-config';
import { Observable } from 'rxjs';

const defaults: MtxDialogData = {
  title: '',
  description: '',
  buttons: [
    {
      color: 'warn',
      text: 'OK',
      focusInitial: true,
      onClick: () => {},
    },
    {
      text: 'CLOSE',
      onClick: () => {},
    },
  ],
  showCloseIcon: false,
  disableClose: true,
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

  alert(
    title: string | Observable<string>,
    description: string | Observable<string> = '',
    onOk = () => {}
  ) {
    this.open({
      title,
      description,
      buttons: [
        {
          color: 'warn',
          text: 'OK',
          onClick: () => onOk(),
        },
      ],
    });
  }

  confirm(
    title: string | Observable<string>,
    description: string | Observable<string> = '',
    onOk = () => {},
    onClose = () => {}
  ) {
    this.open({
      title,
      description,
      buttons: [
        {
          color: 'warn',
          text: 'OK',
          onClick: () => onOk(),
        },
        {
          text: 'CLOSE',
          onClick: () => onClose(),
        },
      ],
    });
  }
}
