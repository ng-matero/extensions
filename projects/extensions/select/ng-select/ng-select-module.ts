import { NgModule } from '@angular/core';
import { NgDropdownPanel } from './ng-dropdown-panel';
import { NgOption } from './ng-option';
import { NgSelect, SELECTION_MODEL_FACTORY } from './ng-select';
import {
  NgFooterTemplate,
  NgHeaderTemplate,
  NgItemLabel,
  NgLabelTemplate,
  NgLoadingSpinnerTemplate,
  NgLoadingTextTemplate,
  NgMultiLabelTemplate,
  NgNotFoundTemplate,
  NgOptgroupTemplate,
  NgOptionTemplate,
  NgPlaceholderTemplate,
  NgTagTemplate,
  NgTypeToSearchTemplate,
  NgClearButtonTemplate,
} from './ng-select-templates';
import { DefaultSelectionModelFactory } from './selection-model';

@NgModule({
  imports: [
    NgDropdownPanel,
    NgOption,
    NgSelect,
    NgOptgroupTemplate,
    NgOptionTemplate,
    NgLabelTemplate,
    NgMultiLabelTemplate,
    NgHeaderTemplate,
    NgFooterTemplate,
    NgPlaceholderTemplate,
    NgClearButtonTemplate,
    NgNotFoundTemplate,
    NgTypeToSearchTemplate,
    NgLoadingTextTemplate,
    NgTagTemplate,
    NgLoadingSpinnerTemplate,
    NgItemLabel,
  ],
  exports: [
    NgSelect,
    NgOption,
    NgOptgroupTemplate,
    NgOptionTemplate,
    NgLabelTemplate,
    NgMultiLabelTemplate,
    NgHeaderTemplate,
    NgFooterTemplate,
    NgPlaceholderTemplate,
    NgNotFoundTemplate,
    NgTypeToSearchTemplate,
    NgLoadingTextTemplate,
    NgTagTemplate,
    NgLoadingSpinnerTemplate,
    NgClearButtonTemplate,
  ],
  providers: [
    {
      provide: SELECTION_MODEL_FACTORY,
      useValue: DefaultSelectionModelFactory,
    },
  ],
})
export class NgSelectModule {}
