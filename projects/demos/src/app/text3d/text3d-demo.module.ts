import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxText3dModule } from '@ng-matero/extensions/text3d';
import { Text3dDemoComponent } from './text3d-demo.component';

@NgModule({
  imports: [MtxText3dModule, RouterModule.forChild([{ path: '', component: Text3dDemoComponent }])],
  declarations: [Text3dDemoComponent],
})
export class Text3dDemoModule {}
