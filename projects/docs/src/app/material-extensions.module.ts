import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@ng-matero/extensions/alert';
import { MtxButtonModule } from '@ng-matero/extensions/button';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';
import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { MtxDrawerModule } from '@ng-matero/extensions/drawer';
import { MtxLoaderModule } from '@ng-matero/extensions/loader';
import { MtxPhotoviewerModule } from '@ng-matero/extensions/photoviewer';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';
import { MtxProgressModule } from '@ng-matero/extensions/progress';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxSplitModule } from '@ng-matero/extensions/split';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';

@NgModule({
  exports: [
    MtxAlertModule,
    MtxButtonModule,
    MtxCheckboxGroupModule,
    MtxColorpickerModule,
    MtxGridModule,
    MtxDatetimepickerModule,
    MtxDialogModule,
    MtxDrawerModule,
    MtxLoaderModule,
    MtxPhotoviewerModule,
    MtxPopoverModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSplitModule,
    MtxTooltipModule,
    MtxMomentDatetimeModule,
  ],
  declarations: [],
})
export class MaterialExtensionsModule {}
