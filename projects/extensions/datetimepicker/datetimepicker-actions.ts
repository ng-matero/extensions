import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { MtxDatetimepicker } from './datetimepicker';

@Directive({
  selector: '[mtxDatepickerApply]',
  host: { '(click)': '_datepicker._selectManually()' },
  standalone: true,
})
export class MtxDatepickerApply<D> {
  constructor(public _datepicker: MtxDatetimepicker<D>) {}
}

@Directive({
  selector: '[mtxDatepickerCancel]',
  host: { '(click)': '_datepicker.close()' },
  standalone: true,
})
export class MtxDatepickerCancel<D> {
  constructor(public _datepicker: MtxDatetimepicker<D>) {}
}

@Directive({
  selector: '[mtxDatepickerClear]',
  host: { '(click)': '_datepicker._clearSelected()' },
  standalone: true,
})
export class MtxDatepickerClear<D> {
  constructor(public _datepicker: MtxDatetimepicker<D>) {}
}

@Component({
  selector: 'mtx-calendar-actions',
  styles: [
    `
      .mtx-calendar-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 8px 8px 8px;
      }

      .mat-calendar-actions .mat-mdc-button-base + .mat-mdc-button-base {
        margin-left: 8px;
      }

      .mat-calendar-actions[dir='rtl'] .mat-mdc-button-base + .mat-mdc-button-base {
        margin-left: 0;
        margin-right: 8px;
      }
    `,
  ],
  template: `
    <ng-template>
      <div class="mtx-calendar-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class MtxDateTimePickerActions<D> implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef) _template!: TemplateRef<unknown>;
  private _portal!: TemplatePortal;
  constructor(
    private _datepicker: MtxDatetimepicker<D>,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }

  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    // Needs to be null checked since we initialize it in `ngAfterViewInit`.
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
}
