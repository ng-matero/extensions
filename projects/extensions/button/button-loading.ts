import {
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
  booleanAttribute,
  inject,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: `[mat-button][loading],
             [mat-raised-button][loading],
             [mat-stroked-button][loading],
             [mat-flat-button][loading],
             [mat-icon-button][loading],
             [mat-fab][loading],
             [mat-mini-fab][loading]`,
})
export class MatButtonLoading implements OnChanges {
  private _elementRef = inject<ElementRef<HTMLButtonElement>>(ElementRef);
  private _viewContainerRef = inject(ViewContainerRef);
  private _renderer = inject(Renderer2);

  private spinner!: ComponentRef<MatProgressSpinner> | null;

  @Input({ transform: booleanAttribute }) loading = false;

  @Input({ transform: booleanAttribute }) disabled = false;

  @Input() color: ThemePalette;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.loading) {
      return;
    }
    if (changes.loading.currentValue) {
      this._elementRef.nativeElement.classList.add('mat-button-loading');
      setTimeout(() => this._elementRef.nativeElement.setAttribute('disabled', ''));
      this.createSpinner();
    } else if (!changes.loading.firstChange) {
      this._elementRef.nativeElement.classList.remove('mat-button-loading');
      setTimeout(() => this._elementRef.nativeElement.removeAttribute('disabled'));
      this.destroySpinner();
    }
  }

  private createSpinner(): void {
    if (!this.spinner) {
      this.spinner = this._viewContainerRef.createComponent(MatProgressSpinner);
      this.spinner.instance.color = this.color;
      this.spinner.instance.diameter = 24;
      this.spinner.instance.mode = 'indeterminate';
      this._renderer.appendChild(
        this._elementRef.nativeElement,
        this.spinner.instance._elementRef.nativeElement
      );
    }
  }

  private destroySpinner(): void {
    if (this.spinner) {
      this.spinner.destroy();
      this.spinner = null;
    }
  }
}
