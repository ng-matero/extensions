import { ThemePalette } from '@angular/material/core';
import { MatDialogConfig } from '@angular/material/dialog';

export interface MtxDialogData extends MatDialogConfig {
  title?: string;
  description?: string;
  buttons?: MtxDialogBtns[];
}

export interface MtxDialogBtns {
  type?: ThemePalette;
  text: string;
  onClick: () => void;
}
