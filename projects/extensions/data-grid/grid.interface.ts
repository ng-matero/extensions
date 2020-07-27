import { TemplateRef } from '@angular/core';

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
  text?: string;
  icon?: string;
  color?: 'primary' | 'accent' | 'warn';
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string;
  children?: MtxGridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string;
}

/**
 * Grid
 */
export interface MtxGridColumn {
  field: string;
  header?: string;
  hide?: boolean;
  disabled?: boolean;
  pinned?: 'left' | 'right';
  left?: string;
  right?: string;
  width?: string;
  resizable?: boolean;
  sortable?: boolean | string;
  type?: 'tag' | 'button' | 'link' | 'image' | 'number' | 'currency' | 'percent' | 'boolean' | 'date';
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
 * Column selection
 */
export interface MtxGridColumnSelectionItem {
  label: string;
  field: string;
  show?: boolean;
  hide?: boolean;
  disabled?: boolean;
}

/**
 * Cell Template
 */
export interface MtxGridCellTemplate {
  [key: string]: TemplateRef<any>;
}

/**
 * Row Selection Formatter
 */
export interface MtxGridRowSelectionFormatter {
  disabled?: (rowData: any) => boolean;
  hideCheckbox?: (rowData: any) => boolean;
}

/**
 * Row Class Formatter
 */
export interface MtxGridRowClassFormatter {
  [className: string]: (rowData: any) => boolean;
}
