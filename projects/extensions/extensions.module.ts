import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxButtonModule } from '@ng-matero/extensions/button';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';
import { MtxGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxLoaderModule } from '@ng-matero/extensions/loader';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxSplitModule } from '@ng-matero/extensions/split-pane';

@NgModule({
  exports: [
    MtxAlertModule,
    MtxButtonModule,
    MtxCheckboxGroupModule,
    MtxColorPickerModule,
    MtxGridModule,
    MtxDialogModule,
    MtxLoaderModule,
    MtxPopoverModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSplitModule,
  ],
  declarations: [],
})
export class MaterialExtensionsModule {}
