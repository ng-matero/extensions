import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxButtonModule } from '@ng-matero/extensions/button';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorPickerModule } from '@ng-matero/extensions/color-picker';
import { MtxGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxLoaderModule } from '@ng-matero/extensions/loader';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxSplitModule } from '@ng-matero/extensions/split-pane';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';

@NgModule({
  exports: [
    MtxAlertModule,
    MtxButtonModule,
    MtxCheckboxGroupModule,
    MtxColorPickerModule,
    MtxGridModule,
    MtxDatetimepickerModule,
    MtxDialogModule,
    MtxLoaderModule,
    MtxPopoverModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSplitModule,
    MtxTooltipModule,
  ],
  declarations: [],
})
export class MaterialExtensionsModule {}
