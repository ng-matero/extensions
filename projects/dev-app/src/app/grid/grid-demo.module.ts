import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxGridModule } from '@ng-matero/extensions/grid';

import { GridDemoComponent } from './grid-demo.component';
import { MtxPipesModule } from '@ng-matero/extensions/core';

@NgModule({
  imports: [
    SharedModule,
    MtxPipesModule,
    RouterModule.forChild([{ path: '', component: GridDemoComponent }]),
    MtxGridModule,
  ],
  declarations: [GridDemoComponent],
})
export class GridDemoModule {}
