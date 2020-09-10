import { Injectable } from '@angular/core';
import { MtxGridColumn } from './grid.interface';

@Injectable()
export class MtxGridService {
  constructor() {}

  /**
   * Get cell value from column key
   * @param data row data
   * @param col  column definition e.g. `a.b.c`
   */
  getCellValue(data: any, col: MtxGridColumn) {
    const keyArr = col.field ? col.field.split('.') : [];

    let tmp: any = '';

    keyArr.forEach((key: string, i: number) => {
      if (i === 0) {
        tmp = data[key];
      } else {
        tmp = tmp && tmp[key];
      }
    });
    return tmp;
  }

  /**
   * Remove white spaces in a string and convert string to array
   * @param str string
   */
  str2arr(str: string) {
    return str.replace(/[\r\n\s]/g, '').split(',');
  }
}
