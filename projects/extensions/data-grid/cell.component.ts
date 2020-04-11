import { Component, OnInit, Input } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn, MtxGridColumnButton } from './grid.interface';
import { MtxGridService } from './grid.service';
import PhotoViewer from 'photoviewer';

@Component({
  selector: 'mtx-grid-cell',
  exportAs: 'mtxGridCell',
  templateUrl: './cell.component.html',
})
export class MtxGridCellComponent implements OnInit {
  /** Row data */
  @Input() rowData = {};

  /** Column definition */
  @Input() colDef: MtxGridColumn;

  colValue = '';

  constructor(private _dialog: MtxDialog, private _dataGridSrv: MtxGridService) { }

  ngOnInit() {
    this.colValue = this._dataGridSrv.getCellValue(this.rowData, this.colDef);
  }

  confirm(event: MouseEvent, title: string, fn?: (p: any) => void, data?: any) {
    event.preventDefault();
    event.stopPropagation();
    this._dialog.confirm(title, () => fn(data));
  }

  handleOptionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: any) {
    event.preventDefault();
    event.stopPropagation();
    btn.click(rowData);
  }

  /** Preview the image */
  preview(urlStr: string, multi = false) {
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
        footToolbar: ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'],
      };
    }

    const viewer = new PhotoViewer(imgs, options);
  }
}
