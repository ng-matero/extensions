import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-matero/ng-select';

import { MtxOption } from './option';
import { MtxSelect } from './select';
import {
  MtxSelectClearbuttonTemplate,
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
