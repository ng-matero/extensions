import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonLoading } from './button-loading';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [MatButtonLoading],
  declarations: [MatButtonLoading],
})
export class MtxButtonModule {}
