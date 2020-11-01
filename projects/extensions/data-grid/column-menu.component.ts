import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MtxGridColumnSelectionItem } from './grid.interface';

@Component({
  selector: 'mtx-grid-column-menu',
  exportAs: 'mtxGridColumnMenu',
  templateUrl: './column-menu.component.html',
  styleUrls: ['./column-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxGridColumnMenuComponent {
  @Input() columns: MtxGridColumnSelectionItem[] = [];
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

  @Input() buttonType: 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' | '' = 'stroked';
  @Input() buttonColor: 'primary' | 'accent' | 'warn' | '' = '';
  @Input() buttonClass = '';
  @Input() buttonIcon = '';

  @Output() selectionChange = new EventEmitter<MtxGridColumnSelectionItem[]>();
  @Output() sortChange = new EventEmitter<MtxGridColumnSelectionItem[]>();

  _handleDroped(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.sortChange.emit(this.columns);
  }

  _handleSelection(e: MatCheckboxChange) {
    this.selectionChange.emit(this.columns);
  }
}
