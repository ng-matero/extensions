import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxText3dModule } from '@ng-matero/extensions/text3d';

import { Text3dDemoComponent } from './text3d-demo.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: Text3dDemoComponent }]), MtxText3dModule],
  declarations: [Text3dDemoComponent],
})
export class Text3dDemoModule {}
