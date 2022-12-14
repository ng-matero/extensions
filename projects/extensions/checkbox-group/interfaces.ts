export interface MtxCheckboxGroupOption {
  ariaDescribedby?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  label?: any;
  value?: any;
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  indeterminate?: boolean;
  labelPosition?: 'before' | 'after';
  id?: string;
  name?: string | null;
  required?: boolean;
  [k: string]: any;
}
