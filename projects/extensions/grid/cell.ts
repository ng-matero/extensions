import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  KeyValueChangeRecord,
  KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { isObservable } from 'rxjs';

import { MtxToObservablePipe } from '@dcnx/mat-extensions/core';
import { MtxDialog } from '@dcnx/mat-extensions/dialog';
import {
  MtxGridCellActionBadgePipe,
  MtxGridCellActionDisablePipe,
  MtxGridCellActionTooltipPipe,
  MtxGridCellActionsPipe,
  MtxGridCellSummaryPipe,
} from './grid-pipes';
import { MtxGridUtils } from './grid-utils';
import { MtxGridColumn, MtxGridColumnButton } from './interfaces';

@Component({
  selector: 'mtx-grid-cell',
  exportAs: 'mtxGridCell',
  templateUrl: './cell.html',
  styleUrl: './cell.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    MatButton,
    MatIconButton,
    MatFabButton,
    MatMiniFabButton,
    MatIcon,
    MatChipListbox,
    MatChip,
    MatTooltip,
    MatBadge,
    MtxToObservablePipe,
    MtxGridCellActionsPipe,
    MtxGridCellSummaryPipe,
    MtxGridCellActionDisablePipe,
    MtxGridCellActionTooltipPipe,
    MtxGridCellActionBadgePipe,
  ],
})
export class MtxGridCell implements OnInit, DoCheck {
  /** Row data */
  @Input() rowData: Record<string, any> = {};

  /** Column definition */
  @Input() colDef!: MtxGridColumn;

  /** Table data */
  @Input() data: any[] = [];

  /** Whether show summary */
  @Input() summary = false;

  /** Placeholder for the empty value (`null`, `''`, `[]`) */
  @Input() placeholder: string = '--';

  @Output() rowDataChange = new EventEmitter<KeyValueChangeRecord<string, any>>();

  private rowDataDiffer?: KeyValueDiffer<string, any>;

  rowChangeRecord?: KeyValueChangeRecord<string, any>;

  get _value() {
    return this._utils.getCellValue(this.rowData, this.colDef);
  }

  constructor(
    private _dialog: MtxDialog,
    private _utils: MtxGridUtils,
    private _differs: KeyValueDiffers,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.rowDataDiffer = this._differs.find(this.rowData).create();
  }

  ngDoCheck(): void {
    const changes = this.rowDataDiffer?.diff(this.rowData);
    if (changes) {
      this._applyChanges(changes);
    }
  }

  private _applyChanges(changes: KeyValueChanges<string, any>) {
    changes.forEachChangedItem(record => {
      this.rowChangeRecord = record;
      this.rowDataChange.emit(record);
      this._changeDetectorRef.markForCheck();
    });
  }

  _getText(value: any) {
    return value === undefined ? '' : this._utils.isEmpty(value) ? this.placeholder : value;
  }

  _getTooltip(value: any) {
    return this._utils.isEmpty(value) ? '' : value;
  }

  _getFormatterTooltip(value: any) {
    return this._utils.isContainHTML(value) || this._utils.isEmpty(value) ? '' : value;
  }

  _onActionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: Record<string, any>) {
    event.preventDefault();
    event.stopPropagation();

    if (typeof btn.pop === 'string' || isObservable(btn.pop)) {
      this._dialog.open({
        title: btn.pop,
        buttons: [
          { color: 'primary', text: 'OK', onClick: () => btn.click?.(rowData) || {} },
          { text: 'CLOSE' },
        ],
      });
    } else if (typeof btn.pop === 'object') {
      this._dialog.open({
        title: btn.pop?.title,
        description: btn.pop?.description,
        buttons: [
          {
            color: btn.pop?.okColor || 'primary',
            text: btn.pop?.okText || 'OK',
            onClick: () => btn.click?.(rowData) || {},
          },
          {
            color: btn.pop?.closeColor,
            text: btn.pop?.closeText || 'CLOSE',
          },
        ],
      });
    } else {
      btn.click?.(rowData);
    }
  }
}
