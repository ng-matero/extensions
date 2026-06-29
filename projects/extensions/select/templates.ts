import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({ selector: '[ngSelectOption]' })
export class MtxSelectOptionTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectOptgroup]' })
export class MtxSelectOptgroupTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectLabel]' })
export class MtxSelectLabelTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectMultiLabel]' })
export class MtxSelectMultiLabelTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectPanelHeader]' })
export class MtxSelectPanelHeaderTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectPanelFooter]' })
export class MtxSelectPanelFooterTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectNotFound]' })
export class MtxSelectNotFoundTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectTypeToSearch]' })
export class MtxSelectTypeToSearchTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectLoadingText]' })
export class MtxSelectLoadingTextTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectTag]' })
export class MtxSelectTagTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectLoading]' })
export class MtxSelectLoadingTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectPlaceholder]' })
export class MtxSelectPlaceholderTemplate {
  template = inject(TemplateRef);
}

@Directive({ selector: '[ngSelectClearButton]' })
export class MtxSelectClearbuttonTemplate {
  template = inject(TemplateRef);
}
