/**
 * 可编辑单元格矩阵
 */
export interface GridEditCell {
  key: string;
  value: string;
  visible: boolean;
}

/**
 * 标签信息
 */
export interface GridColumnTag {
  [key: number]: GridColumnTagValue;
  [key: string]: GridColumnTagValue;
}
export interface GridColumnTagValue {
  text?: string;
  color?: string;
}

/**
 * 按钮配置
 */
export interface GridColumnButton {
  icon?: string;
  text?: string;
  type?: string;
  color?: string;
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string;
  children?: GridColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string;
}

/**
 * 表格
 */
export interface GridColumn {
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
  type?:
    | 'text'
    | 'checkbox'
    | 'tag'
    | 'badge'
    | 'button'
    | 'link'
    | 'img'
    | 'number'
    | 'currency'
    | 'percent'
    | 'format';
  edit?: boolean; // 是否可编辑
  editType?: 'text' | 'number' | 'select' | 'textarea';
  format?: (data: any) => any; // 数值类型，金钱格式等
  tag?: GridColumnTag;
  cat?: string; // 字段分类
  static?: boolean; // 是否是固定显示的值
  buttons?: GridColumnButton[];
  videoLink?: string;
  iif?: boolean | (() => any);
  sum?: string; // 标记是否是总计列
  order?: number; // 排序
}
