import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { Text3dComponent } from './text3d.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: Text3dComponent
    }])],
  declarations: [Text3dComponent],
})
export class Text3dModule { }
