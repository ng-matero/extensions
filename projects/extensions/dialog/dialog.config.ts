import { MatDialogConfig } from '@angular/material';

export interface MtxDialogData extends MatDialogConfig {
  title?: string;
  description?: string;
  buttons?: MtxDialogBtns[];
}

export interface MtxDialogBtns {
  type?: '' | 'primary' | 'accent' | 'warn';
  text: string;
  onClick: () => void;
}
