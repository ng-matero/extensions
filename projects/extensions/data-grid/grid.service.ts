import { Injectable } from '@angular/core';
import { MtxGridColumn } from './grid.interface';

@Injectable()
export class MtxGridService {
  constructor() {}

  /**
   * Get cell value from column key e.g. `a.b.c`
   * @param rowData row data
   * @param colDef  column definition
   */
  getCellValue(rowData: any, colDef: MtxGridColumn): string {
    const keyArr = colDef.field ? colDef.field.split('.') : [];

    let tmp: any = '';

    keyArr.forEach((key: string, i: number) => {
      if (i === 0) {
        tmp = rowData[key];
      } else {
        tmp = tmp && tmp[key];
      }
    });
    return tmp;
  }

  /**
   * Get all data of a col
   * @param data    all data
   * @param colDef  column definition
   */
  getColData(data: any[], colDef: MtxGridColumn): any[] {
    return data.map((rowData: any) => this.getCellValue(rowData, colDef));
  }

  /**
   * Remove white spaces in a string and convert string to array
   * @param str string
   */
  str2arr(str: string): string[] {
    return str.replace(/[\r\n\s]/g, '').split(',');
  }
}
