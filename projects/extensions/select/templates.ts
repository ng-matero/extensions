import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ng-option-tmp]' })
export class MtxSelectOptionTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-optgroup-tmp]' })
export class MtxSelectOptgroupTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-label-tmp]' })
export class MtxSelectLabelTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-multi-label-tmp]' })
export class MtxSelectMultiLabelTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-header-tmp]' })
export class MtxSelectHeaderTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-footer-tmp]' })
export class MtxSelectFooterTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-notfound-tmp]' })
export class MtxSelectNotFoundTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-typetosearch-tmp]' })
export class MtxSelectTypeToSearchTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-loadingtext-tmp]' })
export class MtxSelectLoadingTextTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-tag-tmp]' })
export class MtxSelectTagTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[ng-loadingspinner-tmp]' })
export class MtxSelectLoadingSpinnerTemplate {
  constructor(public template: TemplateRef<any>) {}
}
