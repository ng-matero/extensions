import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { Text3dDemoComponent } from './text3d-demo.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: Text3dDemoComponent }])],
  declarations: [Text3dDemoComponent],
})
export class Text3dDemoModule {}
