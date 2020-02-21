import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxDataGridModule } from '@ng-matero/extensions/data-grid';

import { DataGridDemoComponent } from './data-grid-demo.component';

@NgModule({
  imports: [
    MtxDataGridModule,
    RouterModule.forChild([{ path: '', component: DataGridDemoComponent }]),
  ],
  declarations: [DataGridDemoComponent],
})
export class DataGridDemoModule {}
