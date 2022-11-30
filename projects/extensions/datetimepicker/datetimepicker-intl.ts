import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MtxDatetimepickerIntl {
  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  changes = new Subject<void>();

  /**
   * Label used for confirmation button within the manual input for the datetimepicker
   */
  okLabel = 'OK';

  /**
   * Label used for cancel button within the manual input for the datetimepicker
   */
  cancelLabel = 'Cancel';
}
