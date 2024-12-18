import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({ selector: '[ng-option-tmp]', standalone: true })
export class MtxSelectOptionTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-optgroup-tmp]', standalone: true })
export class MtxSelectOptgroupTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-label-tmp]', standalone: true })
export class MtxSelectLabelTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-multi-label-tmp]', standalone: true })
export class MtxSelectMultiLabelTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-header-tmp]', standalone: true })
export class MtxSelectHeaderTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-footer-tmp]', standalone: true })
export class MtxSelectFooterTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-notfound-tmp]', standalone: true })
export class MtxSelectNotFoundTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-typetosearch-tmp]', standalone: true })
export class MtxSelectTypeToSearchTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-loadingtext-tmp]', standalone: true })
export class MtxSelectLoadingTextTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-tag-tmp]', standalone: true })
export class MtxSelectTagTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-loadingspinner-tmp]', standalone: true })
export class MtxSelectLoadingSpinnerTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({ selector: '[ng-placeholder-tmp]', standalone: true })
export class MtxSelectPlaceholderTemplate {
  template = inject<TemplateRef<any>>(TemplateRef);
}
