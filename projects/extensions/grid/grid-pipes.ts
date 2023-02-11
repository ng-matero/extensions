import { Pipe, PipeTransform } from '@angular/core';
import { MtxGridColumn, MtxGridRowClassFormatter } from './interfaces';

@Pipe({
  name: 'cellClass',
})
export class MtxGridCellClassPipe implements PipeTransform {
  transform(colDef: MtxGridColumn, rowData?: Record<string, any>): string {
    if (typeof colDef.class === 'string') {
      return colDef.class;
    } else if (typeof colDef.class === 'function') {
      return colDef.class(rowData, colDef);
    }
    return '';
  }
}

@Pipe({
  name: 'rowClass',
})
export class MtxGridRowClassPipe implements PipeTransform {
  transform(
    rowData: Record<string, any>,
    index: number,
    dataIndex: number,
    rowClassFormatter?: MtxGridRowClassFormatter
  ): string {
    const rowIndex = typeof index === 'undefined' ? dataIndex : index;
    const classList: string[] = rowIndex % 2 === 1 ? ['mat-row-odd'] : [];
    if (rowClassFormatter) {
      for (const key of Object.keys(rowClassFormatter)) {
        if (rowClassFormatter[key](rowData, rowIndex)) {
          classList.push(key);
        }
      }
    }
    return classList.join(' ');
  }
}
