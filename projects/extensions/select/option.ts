import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  booleanAttribute,
  inject,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'mtx-option',
  exportAs: 'mtxOption',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class MtxOption implements OnChanges, AfterViewChecked, OnDestroy {
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input() value: any;

  @Input({ transform: booleanAttribute }) disabled = false;

  get label() {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }
  private _previousLabel?: string;

  readonly stateChange$ = new Subject<{
    value: any;
    disabled: boolean;
    label?: string;
  }>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled,
      });
    }
  }

  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled,
        label: this.elementRef.nativeElement.innerHTML,
      });
    }
  }

  ngOnDestroy() {
    this.stateChange$.complete();
  }
}
