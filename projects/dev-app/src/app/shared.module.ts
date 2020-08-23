import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, MaterialModule],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, MaterialModule],
})
export class SharedModule {}
