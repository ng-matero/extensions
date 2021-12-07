import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxButtonModule } from '@ng-matero/extensions/button';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxLoaderModule } from '@ng-matero/extensions/loader';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxSliderModule } from '@ng-matero/extensions/slider';
import { MtxSplitModule } from '@ng-matero/extensions/split';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';

@NgModule({
  exports: [
    MtxAlertModule,
    MtxButtonModule,
    MtxCheckboxGroupModule,
    MtxColorpickerModule,
    MtxGridModule,
    MtxDatetimepickerModule,
    MtxDialogModule,
    MtxLoaderModule,
    MtxPopoverModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSliderModule,
    MtxSplitModule,
    MtxTooltipModule,
  ],
  declarations: [],
})
export class MaterialExtensionsModule {}
