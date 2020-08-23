import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxSelectModule } from '@ng-matero/extensions/select';

import { SelectDemoComponent } from './select-demo.component';

@NgModule({
  declarations: [SelectDemoComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SelectDemoComponent }]),
    MtxSelectModule,
  ],
})
export class SelectDemoModule {}
