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
  inject,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { MtxDatetimepicker } from './datetimepicker';

@Directive({
  selector: '[mtxDatetimepickerApply]',
  host: { '(click)': '_datetimepicker._selectManually()' },
})
export class MtxDatetimepickerApply<D> {
  _datetimepicker = inject<MtxDatetimepicker<D>>(MtxDatetimepicker);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
}

@Directive({
  selector: '[mtxDatetimepickerCancel]',
  host: { '(click)': '_datetimepicker.close()' },
})
export class MtxDatetimepickerCancel<D> {
  _datetimepicker = inject<MtxDatetimepicker<D>>(MtxDatetimepicker);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
}

@Directive({
  selector: '[mtxDatetimepickerClear]',
  host: { '(click)': '_datetimepicker._clearSelected()' },
})
export class MtxDatetimepickerClear<D> {
  _datetimepicker = inject<MtxDatetimepicker<D>>(MtxDatetimepicker);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
}

@Component({
  selector: 'mtx-datetimepicker-actions',
  styleUrl: './datetimepicker-actions.scss',
  template: `
    <ng-template>
      <div class="mtx-datetimepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MtxDatetimepickerActions<D> implements AfterViewInit, OnDestroy {
  private _datetimepicker = inject<MtxDatetimepicker<D>>(MtxDatetimepicker);
  private _viewContainerRef = inject(ViewContainerRef);

  @ViewChild(TemplateRef) _template!: TemplateRef<unknown>;
  private _portal!: TemplatePortal;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datetimepicker.registerActions(this._portal);
  }

  ngOnDestroy() {
    this._datetimepicker.removeActions(this._portal);
    // Needs to be null checked since we initialize it in `ngAfterViewInit`.
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
}
