import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { DataGridComponent } from './data-grid.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DataGridComponent }]),
  ],
  declarations: [DataGridComponent],
})
export class DataGridModule { }
