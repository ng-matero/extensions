import { TemplateRef } from '@angular/core';

/**
 * 可编辑单元格矩阵
 */
export interface MtxGridEditCell {
  key: string;
  value: string;
  visible: boolean;
}

/**
 * 标签信息
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
 * 按钮配置
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
 * 表格
 */
export interface MtxGridColumn {
  title: string;
  index?: string;
  checked?: boolean;
  disabled?: boolean;
  fixed?: string;
  left?: string;
  right?: string;
  width?: string;
  desc?: string;
  sort?: boolean | string;
  type?: 'text' | 'checkbox' | 'tag' | 'badge' | 'button' | 'link' | 'img' |
  'number' | 'currency' | 'percent' | 'format' | 'template';
  format?: (data: any) => any; // 数值类型，金钱格式等
  template?: TemplateRef<any>;
  tag?: MtxGridColumnTag;
  cat?: string; // 字段分类
  static?: boolean; // 是否是固定显示的值
  buttons?: MtxGridColumnButton[];
  videoLink?: string;
  iif?: boolean | (() => any);
  sum?: string; // 标记是否是总计列
  order?: number; // 排序
}
