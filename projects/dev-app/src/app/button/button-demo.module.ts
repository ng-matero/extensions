import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxButtonModule } from '@ng-matero/extensions/button';

import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ButtonDemoComponent }]),
    MtxButtonModule,
  ],
  declarations: [ButtonDemoComponent],
})
export class ButtonDemoModule {}
