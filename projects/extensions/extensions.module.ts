import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxDataGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';

@NgModule({
  exports: [MtxAlertModule, MtxDataGridModule, MtxDialogModule, MtxProgressModule, MtxSelectModule],
  declarations: [],
})
export class MaterialExtensionsModule {}
