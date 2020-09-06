import { MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export interface MtxDialogData extends MatDialogConfig {
  title?: string | Observable<string>;
  description?: string | Observable<string>;
  buttons?: MtxDialogBtns[];
}

export interface MtxDialogBtns {
  type?: '' | 'primary' | 'accent' | 'warn';
  text: string | Observable<string>;
  onClick: () => void;
}
