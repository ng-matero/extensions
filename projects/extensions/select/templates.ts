import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({ selector: '[ng-option-tmp]' })
export class MtxSelectOptionTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-optgroup-tmp]' })
export class MtxSelectOptgroupTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-label-tmp]' })
export class MtxSelectLabelTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-multi-label-tmp]' })
export class MtxSelectMultiLabelTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-header-tmp]' })
export class MtxSelectHeaderTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-footer-tmp]' })
export class MtxSelectFooterTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-notfound-tmp]' })
export class MtxSelectNotFoundTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-typetosearch-tmp]' })
export class MtxSelectTypeToSearchTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-loadingtext-tmp]' })
export class MtxSelectLoadingTextTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-tag-tmp]' })
export class MtxSelectTagTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-loadingspinner-tmp]' })
export class MtxSelectLoadingSpinnerTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-placeholder-tmp]' })
export class MtxSelectPlaceholderTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}
