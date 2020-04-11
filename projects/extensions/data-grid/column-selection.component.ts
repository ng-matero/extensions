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
import { MtxGridColumnSelectionItem } from './grid.interface';

@Component({
  selector: 'mtx-grid-column-selection',
  exportAs: 'mtxGridColumnSelection',
  templateUrl: './column-selection.component.html',
  styleUrls: ['./column-selection.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxGridColumnSelectionComponent implements OnInit {
  @Input() columns = [];
  @Input() selectable = true;
  @Input() selectedType: 'show' | 'hide' = 'show';
  @Input() sortable = true;
  @Input() dndSortable = true;

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

  constructor() { }

  ngOnInit() { }

  handleDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.sortChange.emit(this.columnFields);
  }

  handleSelect(e: any) {
    this.selectionChange.emit(this.columnFields);
  }
}
