import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

import { MtxToObservablePipe } from '@dcnx/mat-extensions/core';
import {
  MtxGridButtonType,
  MtxGridColumn,
  MtxGridColumnPinOption,
  MtxGridColumnPinValue,
} from './interfaces';

@Component({
  selector: 'mtx-grid-column-menu',
  exportAs: 'mtxGridColumnMenu',
  templateUrl: './column-menu.html',
  styleUrl: './column-menu.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    FormsModule,
    MatButton,
    MatIconButton,
    MatFabButton,
    MatMiniFabButton,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatCheckbox,
    CdkDrag,
    CdkDropList,
    MtxToObservablePipe,
  ],
})
export class MtxGridColumnMenu {
  @ViewChild('menu', { static: true }) menuPanel!: MatMenu;
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  @Input() columns: MtxGridColumn[] = [];
  @Input() selectable = true;
  @Input() selectableChecked: 'show' | 'hide' = 'show';
  @Input() sortable = true;
  @Input() pinnable = true;

  @Input()
  get buttonText() {
    const defaultText = `Columns ${this.selectableChecked === 'show' ? 'Shown' : 'Hidden'}`;
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
  @Input() headerText = 'Columns Header';
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() showFooter = false;
  @Input() footerText = 'Columns Footer';
  @Input() footerTemplate!: TemplateRef<any>;

  @Output() columnChange = new EventEmitter<MtxGridColumn[]>();

  @Input()
  get pinOptions() {
    return this._pinOptions;
  }
  set pinOptions(value: MtxGridColumnPinOption[]) {
    if (value.length > 0) {
      this._pinOptions = value;
    }
  }
  private _pinOptions: MtxGridColumnPinOption[] = [
    { label: 'Pin Left', value: 'left' },
    { label: 'Pin Right', value: 'right' },
    { label: 'No Pin', value: null },
  ];

  _handleDroped(e: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, e.previousIndex, e.currentIndex);
    this.columnChange.emit(this.columns);
  }

  _handleChecked(col: MtxGridColumn) {
    if (this.selectableChecked === 'show') {
      col.hide = !col.show;
    } else {
      col.show = !col.hide;
    }
    this.columnChange.emit(this.columns);
  }

  _handlePinSelect(col: MtxGridColumn, val: MtxGridColumnPinValue) {
    if (col.pinned != val) {
      col.pinned = val;
      this.columnChange.emit(this.columns);
    }
  }
}
