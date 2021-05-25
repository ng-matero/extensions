import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { ThemePalette } from '@angular/material/core';
import { Subject, Observable, isObservable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MtxGridColumn, MtxGridColumnButton } from './grid.interface';
import { MtxGridService } from './grid.service';
import PhotoViewer from 'photoviewer';

@Component({
  selector: 'mtx-grid-cell',
  exportAs: 'mtxGridCell',
  templateUrl: './cell.component.html',
})
export class MtxGridCellComponent implements OnInit, OnDestroy {
  /** Row data */
  @Input() rowData = {};

  /** Column definition */
  @Input() colDef: MtxGridColumn;

  get _colValue() {
    return this._dataGridSrv.getCellValue(this.rowData, this.colDef);
  }

  _viewer: PhotoViewer;

  private readonly _destroy$ = new Subject<void>();

  constructor(private _dialog: MtxDialog, private _dataGridSrv: MtxGridService) {}

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ngOnInit() {}

  getTranslateVal(data: Observable<any>): string {
    let translateValue = '';
    data.pipe(takeUntil(this._destroy$)).subscribe(res => (translateValue = res));
    return translateValue;
  }

  _handleActionConfirm(
    event: MouseEvent,
    title: string | Observable<any>,
    description: string | Observable<any> = '',
    closeType: ThemePalette = null,
    closeText: string | Observable<any> = 'CLOSE',
    okType: ThemePalette = 'primary',
    okText: string | Observable<any> = 'OK',
    fn?: (p: any) => void,
    data?: any
  ) {
    event.preventDefault();
    event.stopPropagation();

    const _title = isObservable(title) ? this.getTranslateVal(title) : title;
    const _desc = isObservable(description) ? this.getTranslateVal(description) : description;
    const _closeText = isObservable(closeText) ? this.getTranslateVal(closeText) : closeText;
    const _okText = isObservable(okText) ? this.getTranslateVal(okText) : okText;

    this._dialog.open({
      title: _title,
      description: _desc,
      buttons: [
        { type: closeType, text: _closeText, onClick: () => {} },
        { type: okType, text: _okText, onClick: () => fn(data) },
      ],
    });
  }

  _handleActionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: any) {
    event.preventDefault();
    event.stopPropagation();
    btn.click(rowData);
  }

  /** Preview big image */
  _onPreview(urlStr: string, multi = false) {
    const imgs = [];

    let options: PhotoViewer.Options = {};

    if (multi) {
      this._dataGridSrv.str2arr(urlStr).forEach((url, index) => {
        imgs.push({ title: index + 1, src: url });
      });
    } else {
      this._dataGridSrv.str2arr(urlStr).forEach((url, index) => {
        imgs.push({ src: url });
      });

      options = {
        title: false,
        footerToolbar: ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'],
      };
    }

    this._viewer = new PhotoViewer(imgs, options);
  }
}
