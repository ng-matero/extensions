import {
  AfterViewChecked,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ng-option',
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgOptionComponent implements OnChanges, AfterViewChecked, OnDestroy {
  @Input() value: any;
  @Input({ transform: booleanAttribute }) disabled = false;

  elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly stateChange$ = new Subject<{ value: any; disabled: boolean; label?: string }>();

  private _previousLabel = '';

  get label(): string {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }

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
