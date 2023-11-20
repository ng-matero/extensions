import {
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
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
  standalone: true,
})
export class MatButtonLoading implements OnChanges {
  private spinner!: ComponentRef<MatProgressSpinner> | null;

  @Input()
  get loading(): boolean {
    return this._loading;
  }
  set loading(value: boolean) {
    this._loading = coerceBooleanProperty(value);
  }
  private _loading = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input() color: ThemePalette;

  constructor(
    private _elementRef: ElementRef<HTMLButtonElement>,
    private _viewContainerRef: ViewContainerRef,
    private _renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.loading) {
      return;
    }
    console.log('ngOnChanges', changes);
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

  static ngAcceptInputType_loading: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
}
