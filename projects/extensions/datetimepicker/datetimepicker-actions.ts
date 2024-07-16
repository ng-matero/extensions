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
  selector: '[mtxDatetimepickerApply]',
  host: { '(click)': '_datetimepicker._selectManually()' },
  standalone: true,
})
export class MtxDatetimepickerApply<D> {
  constructor(public _datetimepicker: MtxDatetimepicker<D>) {}
}

@Directive({
  selector: '[mtxDatetimepickerCancel]',
  host: { '(click)': '_datetimepicker.close()' },
  standalone: true,
})
export class MtxDatetimepickerCancel<D> {
  constructor(public _datetimepicker: MtxDatetimepicker<D>) {}
}

@Directive({
  selector: '[mtxDatetimepickerClear]',
  host: { '(click)': '_datetimepicker._clearSelected()' },
  standalone: true,
})
export class MtxDatetimepickerClear<D> {
  constructor(public _datetimepicker: MtxDatetimepicker<D>) {}
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
  standalone: true,
})
export class MtxDatetimepickerActions<D> implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef) _template!: TemplateRef<unknown>;
  private _portal!: TemplatePortal;
  constructor(
    private _datetimepicker: MtxDatetimepicker<D>,
    private _viewContainerRef: ViewContainerRef
  ) {}

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
