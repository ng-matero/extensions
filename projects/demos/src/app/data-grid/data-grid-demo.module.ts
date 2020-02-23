import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxDataGridModule } from '@ng-matero/extensions/data-grid';

import { DataGridDemoComponent } from './data-grid-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: DataGridDemoComponent }]),
    MtxDataGridModule,
  ],
  declarations: [DataGridDemoComponent],
})
export class DataGridDemoModule {}
