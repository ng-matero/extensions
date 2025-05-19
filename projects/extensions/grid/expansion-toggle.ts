import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mtx-grid-expansion-toggle]',
  host: {
    '[class.expanded]': 'opened',
    '(click)': 'onClick($event)',
  },
})
export class MtxGridExpansionToggle {
  private _opened = false;
  private _row: any;
  private _tplRef!: TemplateRef<any>;

  @Input()
  get opened() {
    return this._opened;
  }
  set opened(newValue: boolean) {
    this._opened = newValue;
    this.openedChange.emit(newValue);
  }
  @Output() openedChange = new EventEmitter<boolean>();

  @Input()
  set expandableRow(value: any) {
    if (value !== this._row) {
      this._row = value;
    }
  }

  @Input('expansionRowTpl')
  set template(value: TemplateRef<any>) {
    if (value !== this._tplRef) {
      this._tplRef = value;
    }
  }

  @Output() toggleChange = new EventEmitter<MtxGridExpansionToggle>();

  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.toggle();
  }

  toggle() {
    this.opened = !this.opened;
    this.toggleChange.emit(this);
  }
}
