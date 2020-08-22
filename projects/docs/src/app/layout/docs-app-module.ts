import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { DocsAppLayout } from './docs-app-layout';

@NgModule({
  imports: [SharedModule],
  declarations: [DocsAppLayout],
  exports: [DocsAppLayout],
})
export class DocsAppModule {}
