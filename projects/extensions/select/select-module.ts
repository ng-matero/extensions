import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { MtxSelect } from './select';
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
} from './templates';
import { MtxOption } from './option';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: [
    MtxSelect,
    MtxOption,
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
    MtxSelect,
    MtxOption,
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
