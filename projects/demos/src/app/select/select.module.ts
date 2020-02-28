import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxSelectModule } from '@ng-matero/extensions/select';

import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SelectComponent }]),
    MtxSelectModule,
  ],
})
export class SelectModule {}
