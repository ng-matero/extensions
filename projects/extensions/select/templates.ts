import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ng-option-tmp]', standalone: true })
export class MtxSelectOptionTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-optgroup-tmp]', standalone: true })
export class MtxSelectOptgroupTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-label-tmp]', standalone: true })
export class MtxSelectLabelTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-multi-label-tmp]', standalone: true })
export class MtxSelectMultiLabelTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-header-tmp]', standalone: true })
export class MtxSelectHeaderTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-footer-tmp]', standalone: true })
export class MtxSelectFooterTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-notfound-tmp]', standalone: true })
export class MtxSelectNotFoundTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-typetosearch-tmp]', standalone: true })
export class MtxSelectTypeToSearchTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-loadingtext-tmp]', standalone: true })
export class MtxSelectLoadingTextTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-tag-tmp]', standalone: true })
export class MtxSelectTagTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-loadingspinner-tmp]', standalone: true })
export class MtxSelectLoadingSpinnerTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-placeholder-tmp]', standalone: true })
export class MtxSelectPlaceholderTemplate {
  constructor(public template: TemplateRef<any>) {}
}
