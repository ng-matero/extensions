import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SelectComponent }])
  ],
})
export class SelectModule {}
