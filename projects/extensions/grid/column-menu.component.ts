import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
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
export class MtxGridColumnMenuComponent {
  @ViewChild('menu', { static: true }) menuPanel!: MatMenu;
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  @Input() columns: MtxGridColumnSelectionItem[] = [];
  @Input() selectable = true;
  @Input() selectableChecked: 'show' | 'hide' = 'show';
  @Input() sortable = true;
  @Input() dndSortable = true;

  @Input()
  get buttonText() {
    const defaultText = `Columns ${this.selectableChecked === 'show' ? 'Shown' : 'Hidden'}`;
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

  @Input() showHeader = false;
  @Input() headerText = 'Columns Header';
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() showFooter = false;
  @Input() footerText = 'Columns Footer';
  @Input() footerTemplate!: TemplateRef<any>;

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
