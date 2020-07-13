import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { MtxSelectComponent } from './select.component';
import {
  MtxSelectFooterTemplateDirective,
  MtxSelectHeaderTemplateDirective,
  MtxSelectLabelTemplateDirective,
  MtxSelectLoadingSpinnerTemplateDirective,
  MtxSelectLoadingTextTemplateDirective,
  MtxSelectMultiLabelTemplateDirective,
  MtxSelectNotFoundTemplateDirective,
  MtxSelectOptgroupTemplateDirective,
  MtxSelectOptionTemplateDirective,
  MtxSelectTagTemplateDirective,
  MtxSelectTypeToSearchTemplateDirective,
} from './templates.directive';
import { MtxOptionComponent } from './option.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: [
    MtxSelectComponent,
    MtxOptionComponent,
    MtxSelectOptgroupTemplateDirective,
    MtxSelectOptionTemplateDirective,
    MtxSelectLabelTemplateDirective,
    MtxSelectMultiLabelTemplateDirective,
    MtxSelectHeaderTemplateDirective,
    MtxSelectFooterTemplateDirective,
    MtxSelectNotFoundTemplateDirective,
    MtxSelectTypeToSearchTemplateDirective,
    MtxSelectLoadingTextTemplateDirective,
    MtxSelectTagTemplateDirective,
    MtxSelectLoadingSpinnerTemplateDirective,
  ],
  declarations: [
    MtxSelectComponent,
    MtxOptionComponent,
    MtxSelectOptgroupTemplateDirective,
    MtxSelectOptionTemplateDirective,
    MtxSelectLabelTemplateDirective,
    MtxSelectMultiLabelTemplateDirective,
    MtxSelectHeaderTemplateDirective,
    MtxSelectFooterTemplateDirective,
    MtxSelectNotFoundTemplateDirective,
    MtxSelectTypeToSearchTemplateDirective,
    MtxSelectLoadingTextTemplateDirective,
    MtxSelectTagTemplateDirective,
    MtxSelectLoadingSpinnerTemplateDirective,
  ],
})
export class MtxSelectModule {}
