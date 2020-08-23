import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxGridModule } from '@ng-matero/extensions/data-grid';

import { DataGridDemoComponent } from './data-grid-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DataGridDemoComponent }]),
    MtxGridModule,
  ],
  declarations: [DataGridDemoComponent],
})
export class DataGridDemoModule {}
