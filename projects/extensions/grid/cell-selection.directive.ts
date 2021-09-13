import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

import { MtxGridComponent } from './grid.component';

@Directive({
  selector: '[mtx-grid-selectable-cell]',
})
export class MtxGridCellSelectionDirective {
  private _selected = false;
  private _rowData: any;

  shiftKeyPressed = false;
  ctrlKeyPressed = false;

  @HostBinding('class.selected')
  get selected(): boolean {
    return this._selected;
  }

  @Input()
  set matSelectableRowData(value: any) {
    if (value !== this._rowData) {
      this._rowData = value;
    }
  }

  @Output() cellSelectionChange = new EventEmitter<MtxGridCellSelectionDirective>();

  constructor(private _dataGrid: MtxGridComponent) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.ctrlKeyPressed = event.ctrlKey;
    this.shiftKeyPressed = event.shiftKey;

    if (this._dataGrid.cellSelectable) {
      this.select();
    }
  }

  select(): void {
    this._selected = true;
    this.cellSelectionChange.emit(this);
  }

  deselect(): void {
    this._selected = false;
    this.cellSelectionChange.emit(this);
  }

  toggle(): void {
    this._selected = !this._selected;
    this.cellSelectionChange.emit(this);
  }
}
