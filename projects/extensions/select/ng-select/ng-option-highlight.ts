import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ngOptionHighlight]',
})
export class NgOptionHighlight implements OnChanges, AfterViewInit {
  @Input('ngOptionHighlight') term = '';

  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private renderer = inject(Renderer2);

  private element = this.elementRef.nativeElement;
  private label = '';

  private get _canHighlight() {
    return this.term && this.label;
  }

  ngOnChanges() {
    if (this._canHighlight) {
      this._highlightLabel();
    }
  }

  ngAfterViewInit() {
    this.label = this.element.innerHTML;
    if (this._canHighlight) {
      this._highlightLabel();
    }
  }

  private _escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private _highlightLabel() {
    const label = this.label;
    if (!this.term) {
      this._setInnerHtml(label);
      return;
    }

    const alternationString = this._escapeRegExp(this.term).replace(' ', '|');
    const termRegex = new RegExp(alternationString, 'gi');
    this._setInnerHtml(label.replace(termRegex, `<span class="highlighted">$&</span>`));
  }

  private _setInnerHtml(html: string) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }
}
