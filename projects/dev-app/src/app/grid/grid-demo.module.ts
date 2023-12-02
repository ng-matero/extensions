import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxPhotoviewerModule } from '@ng-matero/extensions/photoviewer';

import { GridDemoComponent } from './grid-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: GridDemoComponent }]),
    MtxGridModule,
    MtxPhotoviewerModule,
  ],
  declarations: [GridDemoComponent],
})
export class GridDemoModule {}
