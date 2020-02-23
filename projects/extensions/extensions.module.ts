import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';
import { MtxDataGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';

import { MtxText3dModule } from '@ng-matero/extensions/text3d';

@NgModule({
  exports: [
    MtxAlertModule,
    MtxCheckboxGroupModule,
    MtxColorPickerModule,
    MtxDataGridModule,
    MtxDialogModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxText3dModule,
  ],
  declarations: [],
})
export class MaterialExtensionsModule {}
