import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MtxLoaderComponent } from './loader.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatProgressBarModule],
  exports: [MtxLoaderComponent],
  declarations: [MtxLoaderComponent],
})
export class MtxLoaderModule {}
