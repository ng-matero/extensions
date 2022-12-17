import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'mtx-option',
  exportAs: 'mtxOption',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>`,
})
export class MtxOption implements OnChanges, AfterViewChecked, OnDestroy {
  @Input() value: any;

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  get label() {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }
  private _previousLabel?: string;

  readonly stateChange$ = new Subject<{
    value: any;
    disabled: boolean;
    label?: string;
  }>();

  constructor(public elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this._disabled,
      });
    }
  }

  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this._disabled,
        label: this.elementRef.nativeElement.innerHTML,
      });
    }
  }

  ngOnDestroy() {
    this.stateChange$.complete();
  }

  static ngAcceptInputType_disabled: BooleanInput;
}
