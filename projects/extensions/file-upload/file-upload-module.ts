import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxFileUpload } from './file-upload';

@NgModule({
  imports: [CommonModule, MtxFileUpload],
  exports: [MtxFileUpload],
})
export class MtxFileUploadModule {}
