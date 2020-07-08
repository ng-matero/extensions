import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ng-option-tmp]' })
export class MtxSelectOptionTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-optgroup-tmp]' })
export class MtxSelectOptgroupTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-label-tmp]' })
export class MtxSelectLabelTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-multi-label-tmp]' })
export class MtxSelectMultiLabelTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-header-tmp]' })
export class MtxSelectHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-footer-tmp]' })
export class MtxSelectFooterTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-notfound-tmp]' })
export class MtxSelectNotFoundTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-typetosearch-tmp]' })
export class MtxSelectTypeToSearchTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-loadingtext-tmp]' })
export class MtxSelectLoadingTextTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-tag-tmp]' })
export class MtxSelectTagTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Directive({ selector: '[ng-loadingspinner-tmp]' })
export class MtxSelectLoadingSpinnerTemplateDirective {
  constructor(public template: TemplateRef<any>) { }
}
