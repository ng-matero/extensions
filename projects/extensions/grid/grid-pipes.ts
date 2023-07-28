import { KeyValueChangeRecord, Pipe, PipeTransform } from '@angular/core';
import { isObservable } from 'rxjs';
import { MtxGridUtils } from './grid-utils';
import { MtxGridColumn, MtxGridColumnButton, MtxGridRowClassFormatter } from './interfaces';

@Pipe({
  name: 'colClass',
})
export class MtxGridColClassPipe implements PipeTransform {
  transform(
    colDef: MtxGridColumn,
    rowData?: Record<string, any>,
    rowChangeRecord?: KeyValueChangeRecord<string, any>,
    currentValue?: any
  ): string {
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

@Pipe({
  name: 'cellActionTooltip',
})
export class MtxGridCellActionTooltipPipe implements PipeTransform {
  transform(btn: MtxGridColumnButton, rowData?: Record<string, any>) {
    if (typeof btn.tooltip === 'string' || isObservable(btn.tooltip)) {
      return { message: btn.tooltip };
    } else if (typeof btn.tooltip == 'function') {
      return btn.tooltip(rowData);
    } else {
      return btn.tooltip || { message: '' };
    }
  }
}

@Pipe({
  name: 'cellActionBadge',
})
export class MtxGridCellActionBadgePipe implements PipeTransform {
  transform(btn: MtxGridColumnButton, rowData?: Record<string, any>) {
    if (typeof btn.badge === 'number' || typeof btn.badge === 'string' || isObservable(btn.badge)) {
      return { content: btn.badge };
    } else if (typeof btn.badge == 'function') {
      return btn.badge(rowData);
    } else {
      return btn.badge || { content: '' };
    }
  }
}

@Pipe({
  name: 'cellActionDisable',
})
export class MtxGridCellActionDisablePipe implements PipeTransform {
  transform(
    btn: MtxGridColumnButton,
    rowData: Record<string, any>,
    rowChangeRecord?: KeyValueChangeRecord<string, any>,
    currentValue?: any
  ) {
    if (typeof btn.disabled === 'boolean') {
      return btn.disabled;
    } else if (typeof btn.disabled === 'function') {
      return btn.disabled(rowData);
    } else {
      return false;
    }
  }
}

@Pipe({
  name: 'cellSummary',
})
export class MtxGridCellSummaryPipe implements PipeTransform {
  constructor(private utils: MtxGridUtils) {}
  transform(data: any[], colDef: MtxGridColumn) {
    if (typeof colDef.summary === 'string') {
      return colDef.summary;
    } else if (typeof colDef.summary === 'function') {
      return (colDef.summary as (data: any[], colDef?: MtxGridColumn) => any)(
        this.utils.getColData(data, colDef),
        colDef
      );
    }
  }
}
