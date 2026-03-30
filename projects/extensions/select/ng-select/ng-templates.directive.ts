import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { escapeHTML } from './value-utils';

@Directive({
  selector: '[ngItemLabel]',
})
export class NgItemLabelDirective implements OnChanges {
  @Input() ngItemLabel = '';
  @Input() escape = true;

  private element = inject<ElementRef<HTMLElement>>(ElementRef);

  ngOnChanges(changes: SimpleChanges) {
    this.element.nativeElement.innerHTML = this.escape
      ? escapeHTML(this.ngItemLabel)
      : this.ngItemLabel;
  }
}

@Directive({
  selector: '[ng-option-tmp]',
})
export class NgOptionTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-optgroup-tmp]',
})
export class NgOptgroupTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-label-tmp]',
})
export class NgLabelTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-multi-label-tmp]',
})
export class NgMultiLabelTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-header-tmp]',
})
export class NgHeaderTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-footer-tmp]',
})
export class NgFooterTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-notfound-tmp]',
})
export class NgNotFoundTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-placeholder-tmp]',
})
export class NgPlaceholderTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-typetosearch-tmp]',
})
export class NgTypeToSearchTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-loadingtext-tmp]',
})
export class NgLoadingTextTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-tag-tmp]',
})
export class NgTagTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-loadingspinner-tmp]',
})
export class NgLoadingSpinnerTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[ng-clearbutton-tmp]',
})
export class NgClearButtonTemplateDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}
