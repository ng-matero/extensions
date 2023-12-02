import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxPhotoviewerModule } from '@ng-matero/extensions/photoviewer';

import { PhotoviewerDemoComponent } from './photoviewer-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: PhotoviewerDemoComponent }]),
    MtxPhotoviewerModule,
  ],
  declarations: [PhotoviewerDemoComponent],
})
export class PhotoviewerDemoModule {}
