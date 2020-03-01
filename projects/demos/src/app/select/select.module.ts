import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { MtxSelectModule } from '@ng-matero/extensions/select';

import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SelectComponent }]),
    NgSelectModule,
    MtxSelectModule,
  ],
})
export class SelectModule {}
