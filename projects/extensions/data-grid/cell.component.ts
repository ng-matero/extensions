import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { Observable } from 'rxjs';

import { MtxGridColumn, MtxGridColumnButton } from './grid.interface';
import { MtxGridService } from './grid.service';
import PhotoViewer from 'photoviewer';

@Component({
  selector: 'mtx-grid-cell',
  exportAs: 'mtxGridCell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MtxGridCellComponent {
  /** Row data */
  @Input() rowData = {};

  /** Column definition */
  @Input() colDef: MtxGridColumn;

  get _colValue() {
    return this._dataGridSrv.getCellValue(this.rowData, this.colDef);
  }

  _isEmptyValue(value: any) {
    return value == null || value.toString() === '';
  }

  _isContainHTML(value: string) {
    return /<\/?[a-z][\s\S]*>/i.test(value);
  }

  _showText(value: any) {
    return this._isEmptyValue(value) ? '--' : value;
  }

  _showTooltip(value: any) {
    return this._isEmptyValue(value) ? '' : value;
  }

  _showFormatterTooltip(value: any) {
    return this._isContainHTML(value) || this._isEmptyValue(value) ? '' : value;
  }

  constructor(private _dialog: MtxDialog, private _dataGridSrv: MtxGridService) {}

  _handleActionConfirm(
    event: MouseEvent,
    title: string | Observable<string>,
    description: string | Observable<string> = '',
    okColor: '' | 'primary' | 'accent' | 'warn' = 'primary',
    okText: string | Observable<string> = 'OK',
    closeColor: '' | 'primary' | 'accent' | 'warn' = '',
    closeText: string | Observable<string> = 'CLOSE',
    fn?: (p: any) => void,
    data?: any
  ) {
    event.preventDefault();
    event.stopPropagation();

    this._dialog.open({
      title,
      description,
      buttons: [
        {
          color: okColor,
          text: okText,
          onClick: () => (fn ? fn(data) : {}),
        },
        { color: closeColor, text: closeText, onClick: () => {} },
      ],
    });
  }

  _handleActionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: any) {
    event.preventDefault();
    event.stopPropagation();

    if (btn.click) {
      btn.click(rowData);
    }
  }

  /** Preview enlarged image */
  _onPreview(urlStr: string) {
    const imgs: PhotoViewer.Img[] = [];

    this._dataGridSrv.str2arr(urlStr).forEach((url, index) => {
      imgs.push({ title: index + 1 + '', src: url });
    });

    const footerToolbar =
      imgs.length > 1
        ? ['zoomIn', 'zoomOut', 'prev', 'next', 'rotateRight', 'rotateLeft', 'actualSize']
        : ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'];

    const options: PhotoViewer.Options = {
      title: imgs.length > 1,
      footerToolbar,
    };

    const viewer = new PhotoViewer(imgs, options);
  }
}
