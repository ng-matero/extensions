export interface NgOptionItem {
  [name: string]: any;

  index?: number | null;
  htmlId?: string;
  selected?: boolean;
  disabled?: boolean;
  marked?: boolean;
  label?: string;
  value?: string | any;
  parent?: NgOptionItem | null;
  children?: NgOptionItem[];
}

export type DropdownPosition = 'top' | 'right' | 'bottom' | 'left' | 'auto';
