import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { ThemePalette } from '@angular/material/core';
import { MtxGridButtonType, MtxGridColumn } from './grid.interface';

@Component({
  selector: 'mtx-grid-row-group',
  exportAs: 'mtxGridRowGroup',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxGridRowGroupComponent {
  @ViewChild('menu', { static: true }) menuPanel!: MatMenu;
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  @Input() columns: MtxGridColumn[] = [];
  @Input() selectable = true;
  @Input() selectableChecked: 'show' | 'hide' = 'hide';
  @Input() sortable = true;

  @Input()
  get buttonText() {
    const defaultText = `Row Group ${this.selectableChecked === 'show' ? 'Shown' : 'Hidden'}`;
    return this._buttonText ? this._buttonText : defaultText;
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
  @Input() headerText = 'Row Group Header';
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() showFooter = false;
  @Input() footerText = 'Row Group Footer';
  @Input() footerTemplate!: TemplateRef<any>;

  @Output() selectionChange = new EventEmitter<MtxGridColumn[]>();
  @Output() sortChange = new EventEmitter<MtxGridColumn[]>();


  _handleDroped(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.sortChange.emit(this.columns);
  }

  _handleSelection(e: MatCheckboxChange) {
    this.selectionChange.emit(this.columns);
  }
}
