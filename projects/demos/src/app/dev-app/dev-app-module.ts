import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { DevApp404 } from './dev-app-404';
import { DevAppHome } from './dev-app-home';
import { DevAppLayout } from './dev-app-layout';

@NgModule({
  imports: [SharedModule],
  declarations: [DevAppLayout, DevAppHome, DevApp404],
  exports: [DevAppLayout],
})
export class DevAppModule {}
