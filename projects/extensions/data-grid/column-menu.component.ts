import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ThemePalette } from '@angular/material/core';

import { MtxGridButtonType, MtxGridColumnSelectionItem } from './grid.interface';

@Component({
  selector: 'mtx-grid-column-menu',
  exportAs: 'mtxGridColumnMenu',
  templateUrl: './column-menu.component.html',
  styleUrls: ['./column-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxGridColumnMenuComponent implements OnInit {
  @Input() columns = [];
  @Input() selectable = true;
  @Input() selectedType: 'show' | 'hide' = 'show';
  @Input() sortable = true;
  @Input() dndSortable = true;

  @Input() get buttonText() {
    const defaultText = `Columns ${this.selectedType === 'show' ? 'Shown' : 'Hidden'}`;
    const text = this._buttonText ? this._buttonText : defaultText;
    return text;
  }
  set buttonText(value: string) {
    this._buttonText = value;
  }
  private _buttonText = '';

  @Input() buttonType: MtxGridButtonType = 'stroked';
  @Input() buttonColor: ThemePalette;
  @Input() buttonClass = '';
  @Input() buttonIcon = '';

  @Output() selectionChange = new EventEmitter<string[]>();
  @Output() sortChange = new EventEmitter<string[]>();

  get columnFields(): string[] {
    const fields = this.columns
      .filter((item: MtxGridColumnSelectionItem) =>
        this.selectedType === 'show' ? item.show : !item.hide
      )
      .map((item: MtxGridColumnSelectionItem) => item.field);
    return fields;
  }

  constructor() {}

  ngOnInit() {}

  _handleDroped(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.sortChange.emit(this.columnFields);
  }

  _handleSelection(e: any) {
    this.selectionChange.emit(this.columnFields);
  }
}
