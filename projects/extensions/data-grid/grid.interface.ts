import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Grid
 */
export interface MtxGridColumn {
  field: string;
  header?: string | Observable<any>;
  hide?: boolean;
  disabled?: boolean;
  pinned?: 'left' | 'right';
  left?: string;
  right?: string;
  width?: string;
  resizable?: boolean;
  sortable?: boolean | string;
  sortProp?: MtxGridColumnSortProp;
  type?: MtxGridColumnType;
  typeParameter?: MtxGridColumnTypeParameter;
  tag?: MtxGridColumnTag;
  buttons?: MtxGridColumnButton[];
  formatter?: (rowData: any, colDef?: any) => void;
  cellTemplate?: TemplateRef<any> | null;
  showExpand?: boolean;
  description?: string;
  i18n?: string;
  summary?: ((colData: any, colDef?: any) => void) | string;
}

/**
 * Column type
 */

export declare type MtxGridColumnType =
  | 'tag'
  | 'button'
  | 'link'
  | 'image'
  | 'boolean'
  | 'number'
  | 'currency'
  | 'percent'
  | 'date';

/**
 * Column type parameter
 */
export interface MtxGridColumnTypeParameter {
  currencyCode?: string;
  display?: string | boolean;
  digitsInfo?: string;
  format?: string;
  locale?: string;
  timezone?: string;
}

/**
 * Column sort properties
 */
export interface MtxGridColumnSortProp {
  arrowPosition?: 'before' | 'after';
  disableClear?: boolean;
  id?: string;
  start?: 'asc' | 'desc';
}

/**
 * Tag
 */
export interface MtxGridColumnTag {
  [key: number]: MtxGridColumnTagValue;
  [key: string]: MtxGridColumnTagValue;
}

export interface MtxGridColumnTagValue {
  text?: string;
  color?: string;
}

/**
 * Button
 */
export interface MtxGridColumnButton {
  type?: 'basic' | 'icon';
  text?: string | Observable<any>;
  icon?: string;
  color?: 'primary' | 'accent' | 'warn';
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string | Observable<any>;
  popDescription?: string | Observable<any>;
  popOkType?: '' | 'primary' | 'accent' | 'warn';
  popOkText?: string | Observable<any>;
  popCloseType?: '' | 'primary' | 'accent' | 'warn';
  popCloseText?: string | Observable<any>;
  children?: MtxGridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string | Observable<any>;
  disabled?: boolean;
}

/**
 * Column selection
 */
export interface MtxGridColumnSelectionItem {
  label: string | Observable<any>;
  field: string;
  show?: boolean;
  hide?: boolean;
  disabled?: boolean;
}

/**
 * Cell template
 */
export interface MtxGridCellTemplate {
  [key: string]: TemplateRef<any>;
}

/**
 * Row selection formatter
 */
export interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any) => boolean;
  hideCheckbox?: (rowData: any) => boolean;
}

/**
 * Row class formatter
 */
export interface MtxGridRowClassFormatter {
  [className: string]: (rowData: any) => boolean;
}
