import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MtxSelect } from './select';
import {
  MtxSelectFooterTemplate,
  MtxSelectHeaderTemplate,
  MtxSelectLabelTemplate,
  MtxSelectLoadingSpinnerTemplate,
  MtxSelectLoadingTextTemplate,
  MtxSelectMultiLabelTemplate,
  MtxSelectNotFoundTemplate,
  MtxSelectOptgroupTemplate,
  MtxSelectOptionTemplate,
  MtxSelectPlaceholderTemplate,
  MtxSelectTagTemplate,
  MtxSelectTypeToSearchTemplate,
} from './templates';
import { MtxOption } from './option';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MtxSelect,
    MtxOption,
    MtxSelectOptgroupTemplate,
    MtxSelectOptionTemplate,
    MtxSelectLabelTemplate,
    MtxSelectMultiLabelTemplate,
    MtxSelectHeaderTemplate,
    MtxSelectFooterTemplate,
    MtxSelectNotFoundTemplate,
    MtxSelectTypeToSearchTemplate,
    MtxSelectLoadingTextTemplate,
    MtxSelectTagTemplate,
    MtxSelectLoadingSpinnerTemplate,
    MtxSelectPlaceholderTemplate,
  ],
  exports: [
    MtxSelect,
    MtxOption,
    MtxSelectOptgroupTemplate,
    MtxSelectOptionTemplate,
    MtxSelectLabelTemplate,
    MtxSelectMultiLabelTemplate,
    MtxSelectHeaderTemplate,
    MtxSelectFooterTemplate,
    MtxSelectNotFoundTemplate,
    MtxSelectTypeToSearchTemplate,
    MtxSelectLoadingTextTemplate,
    MtxSelectTagTemplate,
    MtxSelectLoadingSpinnerTemplate,
    MtxSelectPlaceholderTemplate,
  ],
})
export class MtxSelectModule {}
