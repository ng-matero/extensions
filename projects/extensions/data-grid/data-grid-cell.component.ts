import { Component, OnInit, Input } from '@angular/core';
import { GridColumn } from './data-grid.interface';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import PhotoViewer from 'photoviewer';

@Component({
  selector: 'mtx-grid-cell',
  exportAs: 'mtxGridCell',
  templateUrl: './data-grid-cell.component.html',
})
export class MtxDataGridCellComponent implements OnInit {
  /** Row data */
  @Input() data = {};

  /** Col definition */
  @Input() col: GridColumn;

  colValue = '';

  constructor(private dialog: MtxDialog) {}

  private str2arr(str: string) {
    return str.replace(/[\r\n\s]/g, '').split(',');
  }

  private getObjValue(obj: {}, keyArr: string[]) {
    let tmp = '';
    keyArr.forEach((key, i) => {
      if (i === 0) {
        tmp = obj[key];
      } else {
        tmp = tmp && tmp[key];
      }
    });
    return tmp;
  }

  ngOnInit() {
    this.colValue = this.getObjValue(this.data, this.col.index.split('.'));
  }

  confirm(title: string, fn?: (p: any) => void, data?: any) {
    this.dialog.confirm(title, () => {
      fn(data);
    });
  }

  /** Preview the image */
  preview(urlStr: string, multi = false) {
    const imgs = [];

    let options: PhotoViewer.Options = {};

    if (multi) {
      this.str2arr(urlStr).forEach((url, index) => {
        imgs.push({
          title: index + 1,
          src: url,
        });
      });
    } else {
      this.str2arr(urlStr).forEach((url, index) => {
        imgs.push({
          src: url,
        });
      });

      options = {
        title: false,
        footToolbar: ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'],
      };
    }

    const viewer = new PhotoViewer(imgs, options);
  }
}
