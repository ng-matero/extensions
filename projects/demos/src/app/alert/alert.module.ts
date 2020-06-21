import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { AlertComponent } from './alert.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([{ path: '', component: AlertComponent }])],
  declarations: [AlertComponent],
})
export class AlertModule { }
