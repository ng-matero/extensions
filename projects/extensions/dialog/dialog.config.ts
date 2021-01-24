import { MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export interface MtxDialogData extends MatDialogConfig {
  title?: string | Observable<string>;
  description?: string | Observable<string>;
  buttons?: MtxDialogBtns[];
  showCloseIcon?: boolean;
}

export interface MtxDialogBtns {
  type?: '' | 'raised' | 'stroked' | 'flat';
  color?: '' | 'primary' | 'accent' | 'warn';
  class?: string;
  focusInitial?: boolean;
  text: string | Observable<string>;
  onClick?: () => void;
}
