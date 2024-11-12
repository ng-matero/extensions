import { TemplateRef } from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';
import { SortDirection } from '@angular/material/sort';
import { TooltipPosition, TooltipTouchGestures } from '@angular/material/tooltip';
import { Observable } from 'rxjs';

/** Column definition of grid. */
export interface MtxGridColumn<T = any> {
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
  buttons?: MtxGridColumnButton<T>[] | ((rowData: T) => MtxGridColumnButton<T>[]);
  formatter?: (rowData: T, colDef?: MtxGridColumn) => any;
  cellTemplate?: TemplateRef<any> | null;
  showExpand?: boolean;
  description?: string;
  summary?: ((data: T[], colDef?: MtxGridColumn) => any) | string;
  class?: string | ((rowData?: T, colDef?: MtxGridColumn) => string);
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
  | 'button'
  | 'tag'
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
export interface MtxGridColumnButton<T = any> {
  type?: MtxGridButtonType;
  text?: string | Observable<string>;
  icon?: string;
  fontIcon?: string;
  svgIcon?: string;
  color?: ThemePalette;
  class?: string;
  disabled?: boolean | ((rowData: T) => boolean);
  click?: (rowData: T) => void;
  iif?: (rowData: T) => boolean;
  pop?: string | Observable<string> | MtxGridColumnButtonPop;
  tooltip?: string | Observable<string> | MtxGridColumnButtonTooltip;
  badge?: number | string | Observable<string> | MtxGridColumnButtonBadge;
}

/** The properties of column button pop. */
export interface MtxGridColumnButtonPop {
  title: string | Observable<string>;
  description?: string | Observable<string>;
  okColor?: ThemePalette;
  okText?: string | Observable<string>;
  closeColor?: ThemePalette;
  closeText?: string | Observable<string>;
}

/** The properties of column button tooltip. */
export interface MtxGridColumnButtonTooltip {
  message: string | Observable<string>;
  position?: TooltipPosition;
  positionAtOrigin?: boolean;
  class?: any;
  hideDelay?: number;
  showDelay?: number;
  touchGestures?: TooltipTouchGestures;
  disabled?: boolean;
}

/** The properties of column button badge. */
export interface MtxGridColumnButtonBadge {
  content: number | string | Observable<string>;
  description?: string | Observable<string>;
  color?: ThemePalette;
  position?: MatBadgePosition;
  size?: MatBadgeSize;
  overlap?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}

/** Cell template. */
export interface MtxGridCellTemplate {
  [key: string]: TemplateRef<any>;
}

/** Row selection formatter. */
export interface MtxGridRowSelectionFormatter<T = any> {
  disabled?: (rowData: T, index: number) => boolean;
  hideCheckbox?: (rowData: T, index: number) => boolean;
}

/** Row class formatter. */
export interface MtxGridRowClassFormatter<T = any> {
  [className: string]: (rowData: T, index: number) => boolean;
}

/** Possible button type values. */
export type MtxGridButtonType =
  | 'basic'
  | 'raised'
  | 'stroked'
  | 'flat'
  | 'icon'
  | 'fab'
  | 'mini-fab';

/**
 * Represents the default options for the grid that can be configured
 * using the `MTX_GRID_DEFAULT_OPTIONS` injection token.
 */
export interface MtxGridDefaultOptions {
  columnResizable?: boolean;
  emptyValuePlaceholder?: string;

  pageOnFront?: boolean;
  showPaginator?: boolean;
  pageDisabled?: boolean;
  showFirstLastButtons?: boolean;
  pageIndex?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  hidePageSize?: boolean;

  sortOnFront?: boolean;
  sortActive?: string;
  sortDirection?: SortDirection;
  sortDisableClear?: boolean;
  sortDisabled?: boolean;
  sortStart?: 'asc' | 'desc';

  rowHover?: boolean;
  rowStriped?: boolean;

  multiSelectable?: boolean;
  multiSelectionWithClick?: boolean;
  rowSelectable?: boolean;
  hideRowSelectionCheckbox?: boolean;
  disableRowClickSelection?: boolean;

  cellSelectable?: boolean;

  showToolbar?: boolean;
  toolbarTitle?: string;

  columnHideable?: boolean;
  columnHideableChecked?: 'show' | 'hide';
  columnSortable?: boolean;
  columnPinnable?: boolean;
  columnPinOptions?: MtxGridColumnPinOption[];

  showColumnMenuButton?: boolean;
  columnMenuButtonText?: string;
  columnMenuButtonType?: MtxGridButtonType;
  columnMenuButtonColor?: ThemePalette;
  columnMenuButtonClass?: string;
  columnMenuButtonIcon?: string;

  showColumnMenuHeader?: boolean;
  columnMenuHeaderText?: string;
  showColumnMenuFooter?: boolean;
  columnMenuFooterText?: string;

  noResultText?: string;
}
