import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxDataGridModule } from '@ng-matero/extensions/data-grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { DataGridDemoComponent } from './data-grid-demo.component';

@NgModule({
  imports: [
    MtxDataGridModule,
    MtxDialogModule,
    RouterModule.forChild([{ path: '', component: DataGridDemoComponent }]),
  ],
  declarations: [DataGridDemoComponent],
})
export class DataGridDemoModule {}
