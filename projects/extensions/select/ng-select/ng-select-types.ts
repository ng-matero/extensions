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

export type AddTagFn = (term: string) => any | Promise<any>;

export type CompareWithFn = (a: any, b: any) => boolean;

export type GroupValueFn = (
  key: string | Record<string, any>,
  children: any[]
) => string | Record<string, any>;

export type SearchFn = (term: string, item: any) => boolean;

export type TrackByFn = (item: any) => any;
