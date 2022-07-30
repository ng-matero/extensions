import { TemplateRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';

/** Column definition of grid. */
export interface MtxGridColumn {
  field: string;
  header?: string | Observable<string>;
  hide?: boolean;
  show?: boolean;
  disabled?: boolean;
  pinned?: MtxGridColumnPinValue;
  left?: string;
  right?: string;
  width?: string;
  resizable?: boolean;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean | string;
  sortProp?: MtxGridSortProp;
  type?: MtxGridColumnType;
  typeParameter?: MtxGridColumnTypeParameter;
  tag?: MtxGridColumnTag;
  buttons?: MtxGridColumnButton[];
  formatter?: (rowData: any, colDef?: MtxGridColumn) => void;
  cellTemplate?: TemplateRef<any> | null;
  showExpand?: boolean;
  description?: string;
  summary?: ((data: any[], colDef?: MtxGridColumn) => void) | string;
  class?: string;
}

/** Possible column pin values.  */
export declare type MtxGridColumnPinValue = 'left' | 'right' | null;

/** Column pin option  */
export interface MtxGridColumnPinOption {
  label: string | Observable<string>;
  value: MtxGridColumnPinValue;
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

/** The properties of data sort. */
export interface MtxGridSortProp {
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
  text?: string | Observable<string>;
  icon?: string;
  color?: ThemePalette;
  class?: string;
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string | Observable<string>;
  popDescription?: string | Observable<string>;
  popOkColor?: ThemePalette;
  popOkText?: string | Observable<string>;
  popCloseColor?: ThemePalette;
  popCloseText?: string | Observable<string>;
  children?: MtxGridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string | Observable<string>;
  disabled?: boolean;
}

/** Cell template. */
export interface MtxGridCellTemplate {
  [key: string]: TemplateRef<any>;
}

/** Row selection formatter. */
export interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any, index?: number) => boolean;
  hideCheckbox?: (rowData: any, index?: number) => boolean;
}

/** Row class formatter. */
export interface MtxGridRowClassFormatter {
  [className: string]: (rowData: any, index?: number) => boolean;
}

/** Column menu component. */
export interface MtxGridColumnMenu {
  menuPanel: MatMenu;
  menuTrigger: MatMenuTrigger;
}

/** Possible button type values. */
export type MtxGridButtonType = 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab';

/** Possible button type values. */
export class RowGroup {
  [key: string]: any;

  // parent: RowGroup | undefined;
  expanded = true;
  totalCounts = 0;

  get visible(): boolean {
    return !this.parent || (this.parent.visible && this.parent.expanded);
  }
}
