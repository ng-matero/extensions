import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { isObservable } from 'rxjs';

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
  @Input() rowData: any = {};

  /** Column definition */
  @Input() colDef!: MtxGridColumn;

  /** Table data */
  @Input() data: any[] = [];

  /** Whether show summary */
  @Input() summary = false;

  /** Placeholder for the empty value (`null`, `''`, `[]`) */
  @Input() placeholder: string = '--';

  get _colValue() {
    return this._dataGridSrv.getCellValue(this.rowData, this.colDef);
  }

  _isEmptyValue(value: any) {
    return value == null || value.toString() === '';
  }

  _isContainHTML(value: string) {
    return /<\/?[a-z][\s\S]*>/i.test(value);
  }

  _getText(value: any) {
    return value === undefined ? '' : this._isEmptyValue(value) ? this.placeholder : value;
  }

  _getTooltip(value: any) {
    return this._isEmptyValue(value) ? '' : value;
  }

  _getFormatterTooltip(value: any) {
    return this._isContainHTML(value) || this._isEmptyValue(value) ? '' : value;
  }

  _formatSummary(data: any[], colDef: MtxGridColumn) {
    if (typeof colDef.summary === 'string') {
      return colDef.summary;
    } else if (typeof colDef.summary === 'function') {
      return (colDef.summary as (data: any[], colDef?: MtxGridColumn) => any)(
        this._dataGridSrv.getColData(data, colDef),
        colDef
      );
    }
  }

  constructor(private _dialog: MtxDialog, private _dataGridSrv: MtxGridService) {}

  _onActionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: any) {
    event.preventDefault();
    event.stopPropagation();

    if (btn.pop) {
      this._dialog.open({
        title: btn.pop?.title,
        description: btn.pop?.description,
        buttons: [
          {
            color: btn.pop?.okColor || 'primary',
            text: btn.pop?.okText || 'OK',
            onClick: () => btn.click?.(rowData) || {},
          },
          {
            color: btn.pop?.closeColor,
            text: btn.pop?.closeText || 'CLOSE',
            onClick: () => {},
          },
        ],
      });
    } else {
      btn.click?.(rowData);
    }
  }

  _getActionTooltip(btn: MtxGridColumnButton) {
    if (typeof btn.tooltip === 'string' || isObservable(btn.tooltip)) {
      return {
        message: btn.tooltip,
      };
    } else {
      return btn.tooltip;
    }
  }

  _isActionDisabled(btn: MtxGridColumnButton, rowData: any) {
    if (typeof btn.disabled === 'boolean') {
      return btn.disabled;
    } else if (typeof btn.disabled === 'function') {
      return btn.disabled(rowData);
    } else {
      return false;
    }
  }

  /** Preview enlarged image */
  _onImagePreview(urlStr: string) {
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

    const photoviewer = new PhotoViewer(imgs, options);
  }
}
