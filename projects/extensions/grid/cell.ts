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
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridUtils } from './grid-utils';
import { MtxGridColumn, MtxGridColumnButton } from './interfaces';
import PhotoViewer from 'photoviewer';

@Component({
  selector: 'mtx-grid-cell',
  exportAs: 'mtxGridCell',
  templateUrl: './cell.html',
  styleUrls: ['./cell.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      this._changeDetectorRef.markForCheck();
      this.rowDataChange.emit(record);
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

    if (btn.pop) {
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
            onClick: () => {},
          },
        ],
      });
    } else {
      btn.click?.(rowData);
    }
  }

  /** Preview enlarged image */
  _onImagePreview(urlStr: string) {
    const imgs: PhotoViewer.Img[] = [];

    this._utils.str2arr(urlStr).forEach((url, index) => {
      imgs.push({ title: index + 1 + '', src: url });
    });

    const footerToolbar =
      imgs.length > 1
        ? ['zoomIn', 'zoomOut', 'prev', 'next', 'rotateRight', 'rotateLeft', 'actualSize']
        : ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'];

    const options: PhotoViewer.Options = {
      title: imgs.length > 1,
      footerToolbar,
    };

    const photoviewer = new PhotoViewer(imgs, options);
  }
}
