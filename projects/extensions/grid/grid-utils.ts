import { Injectable } from '@angular/core';
import { MtxGridColumn } from './interfaces';

@Injectable()
export class MtxGridUtils {
  constructor() {}

  /**
   * Get cell's value based on the data and column's field (e.g. `a.b.c`)
   * @param rowData Row data
   * @param colDef Column definition
   * @returns
   */
  getCellValue(rowData: Record<string, any>, colDef: MtxGridColumn): string {
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
   * @param data All data
   * @param colDef Column definition
   * @returns
   */
  getColData(data: any[], colDef: MtxGridColumn): any[] {
    return data.map(rowData => this.getCellValue(rowData, colDef));
  }

  /**
   * Remove white spaces in a string and convert string to array
   * @param str
   * @returns
   */
  str2arr(str: string): string[] {
    return str.replace(/[\r\n\s]/g, '').split(',');
  }

  /**
   * Whether the value is empty (`null`, `undefined`, `''`, `[]`)
   * @param value
   * @returns
   */
  isEmpty(value: any) {
    return value == null || value.toString() === '';
  }

  /**
   * Whether the value contain HTML
   * @param value
   * @returns
   */
  isContainHTML(value: string) {
    return /<\/?[a-z][\s\S]*>/i.test(value);
  }
}
