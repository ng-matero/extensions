import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from './ng-select';

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
  MtxSelectClearbuttonTemplate,
} from './templates';
import { MtxOption } from './option';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    MtxSelectClearbuttonTemplate,
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
    MtxSelectClearbuttonTemplate,
  ],
})
export class MtxSelectModule {}
