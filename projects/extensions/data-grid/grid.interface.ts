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
  header?: string;
  field: string;
  hide?: boolean;
  disabled?: boolean;
  pinned?: 'left' | 'right';
  left?: string;
  right?: string;
  width?: string;
  resizable?: boolean;
  sortable?: boolean | string;
  type?: 'tag' | 'button' | 'link' | 'image' | 'number' | 'currency' | 'percent' | 'boolean';
  formatter?: (data: any, index?: number) => any;
  cellTemplate?: TemplateRef<any>;
  tag?: MtxGridColumnTag;
  buttons?: MtxGridColumnButton[];
  showExpand?: boolean;
  description?: string;
  i18n?: string;
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
