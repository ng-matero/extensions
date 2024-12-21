import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Injector,
  Input,
  NgZone,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

let uniqueIdCounter = 0;

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
export class MtxCalendarCell {
  readonly id = uniqueIdCounter++;

  constructor(
    public value: number,
    public displayValue: string,
    public ariaLabel: string,
    public enabled: boolean
  ) {}
}

/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
@Component({
  selector: '[mtx-calendar-body]',
  templateUrl: 'calendar-body.html',
  styleUrl: 'calendar-body.scss',
  host: {
    'class': 'mtx-calendar-body',
    'role': 'grid',
    'aria-readonly': 'true',
  },
  exportAs: 'mtxCalendarBody',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxCalendarBody implements OnChanges {
  private _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private _ngZone = inject(NgZone);

  private _injector = inject(Injector);

  /** The label for the table. (e.g. "Jan 2017"). */
  @Input() label!: string;

  /** The cells to display in the table. */
  @Input() rows!: MtxCalendarCell[][];

  /**
   * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
   * maintained even as the table resizes.
   */
  @Input() cellAspectRatio: number = 1;

  /** The value in the table that corresponds to today. */
  @Input() todayValue!: number;

  /** The value in the table that is currently selected. */
  @Input() selectedValue!: number;

  /** The minimum number of free cells needed to fit the label in the first row. */
  @Input() labelMinRequiredCells!: number;

  /** The number of columns in the table. */
  @Input() numCols = 7;

  /** Whether to allow selection of disabled cells. */
  @Input() allowDisabledSelection = false;

  /** The cell number of the active cell in the table. */
  @Input() activeCell = 0;

  /** Emits when a new value is selected. */
  @Output() selectedValueChange = new EventEmitter<number>();

  /** The number of blank cells to put at the beginning for the first row. */
  _firstRowOffset!: number;

  /** Padding for the individual date cells. */
  _cellPadding!: string;

  /** Width of an individual cell. */
  _cellWidth!: string;

  _cellClicked(cell: MtxCalendarCell): void {
    if (!this.allowDisabledSelection && !cell.enabled) {
      return;
    }
    this.selectedValueChange.emit(cell.value);
  }

  _emitActiveDateChange(cell: MtxCalendarCell, event: FocusEvent): void {
    if (cell.enabled) {
      // this.activeDateChange.emit({ value: cell.value, event });
    }
  }

  _isActiveCell(rowIndex: number, colIndex: number): boolean {
    let cellNumber = rowIndex * this.numCols + colIndex;

    // Account for the fact that the first row may not have as many cells.
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }

    return cellNumber === this.activeCell;
  }

  /**
   * Tracking function for rows based on their identity. Ideally we would use some sort of
   * key on the row, but that would require a breaking change for the `rows` input. We don't
   * use the built-in identity tracking, because it logs warnings.
   */
  _trackRow = (row: MtxCalendarCell[]) => row;

  ngOnChanges(changes: SimpleChanges) {
    const columnChanges = changes['numCols'];
    const { rows, numCols } = this;

    if (changes['rows'] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }

    if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${(50 * this.cellAspectRatio) / numCols}%`;
    }

    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }

  _focusActiveCell(movePreview = true) {
    afterNextRender(
      () => {
        setTimeout(() => {
          const activeCell: HTMLElement | null = this._elementRef.nativeElement.querySelector(
            '.mtx-calendar-body-active'
          );

          if (activeCell) {
            activeCell.focus();
          }
        });
      },
      { injector: this._injector }
    );
  }
}
