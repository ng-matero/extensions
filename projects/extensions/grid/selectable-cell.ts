import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[mtx-grid-selectable-cell]',
})
export class MtxGridSelectableCell {
  ctrlKeyPressed = false;
  shiftKeyPressed = false;

  @HostBinding('class.selected')
  get selected() {
    return this._selected;
  }
  private _selected = false;

  @Input() cellSelectable = true;

  @Output() cellSelectedChange = new EventEmitter<MtxGridSelectableCell>();

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.ctrlKeyPressed = event.ctrlKey;
    this.shiftKeyPressed = event.shiftKey;

    if (this.cellSelectable) {
      this.select();
    }
  }

  select(): void {
    this._selected = true;
    this.cellSelectedChange.emit(this);
  }

  deselect(): void {
    this._selected = false;
    this.cellSelectedChange.emit(this);
  }

  toggle(): void {
    this._selected = !this._selected;
    this.cellSelectedChange.emit(this);
  }
}
