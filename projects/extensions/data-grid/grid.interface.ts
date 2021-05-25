import { TemplateRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';

/** Column definition of grid. */
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

/** Possible column type values. */
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

/** Column type parameter. */
export interface MtxGridColumnTypeParameter {
  currencyCode?: string;
  display?: string | boolean;
  digitsInfo?: string;
  format?: string;
  locale?: string;
  timezone?: string;
}

/** The properties of column sort. */
export interface MtxGridColumnSortProp {
  arrowPosition?: 'before' | 'after';
  disableClear?: boolean;
  id?: string;
  start?: 'asc' | 'desc';
}

/** Column tag of grid. */
export interface MtxGridColumnTag {
  [key: number]: MtxGridColumnTagValue;
  [key: string]: MtxGridColumnTagValue;
}

/** The properties of column tag. */
export interface MtxGridColumnTagValue {
  text?: string;
  color?: string;
}

/** The properties of column button. */
export interface MtxGridColumnButton {
  type?: 'basic' | 'icon';
  text?: string | Observable<any>;
  icon?: string;
  color?: 'primary' | 'accent' | 'warn';
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string | Observable<any>;
  popDescription?: string | Observable<any>;
  popOkType?: ThemePalette;
  popOkText?: string | Observable<any>;
  popCloseType?: ThemePalette;
  popCloseText?: string | Observable<any>;
  children?: MtxGridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string | Observable<any>;
  disabled?: boolean;
}

/** The properties of column selection item. */
export interface MtxGridColumnSelectionItem {
  label: string | Observable<any>;
  field: string;
  show?: boolean;
  hide?: boolean;
  disabled?: boolean;
}

/** Cell template. */
export interface MtxGridCellTemplate {
  [key: string]: TemplateRef<any>;
}

/** Row selection formatter. */
export interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any) => boolean;
  hideCheckbox?: (rowData: any) => boolean;
}

/** Row class formatter. */
export interface MtxGridRowClassFormatter {
  [className: string]: (rowData: any) => boolean;
}

/** Possible button type values. */
export type MtxGridButtonType = 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab';
