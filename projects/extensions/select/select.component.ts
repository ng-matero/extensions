import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  ChangeDetectorRef,
  Optional,
  Self,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChild,
  ContentChildren,
  QueryList,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject, merge } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';

import {
  MtxSelectOptionTemplateDirective,
  MtxSelectLabelTemplateDirective,
  MtxSelectHeaderTemplateDirective,
  MtxSelectFooterTemplateDirective,
  MtxSelectOptgroupTemplateDirective,
  MtxSelectNotFoundTemplateDirective,
  MtxSelectTypeToSearchTemplateDirective,
  MtxSelectLoadingTextTemplateDirective,
  MtxSelectMultiLabelTemplateDirective,
  MtxSelectTagTemplateDirective,
  MtxSelectLoadingSpinnerTemplateDirective,
} from './templates.directive';
import { MtxOptionComponent } from './option.component';
import { NgSelectComponent } from '@ng-select/ng-select';

export type DropdownPosition = 'bottom' | 'top' | 'auto';
export type AddTagFn = (term: string) => any | Promise<any>;
export type CompareWithFn = (a: any, b: any) => boolean;
export type GroupValueFn = (
  key: string | Record<string, any>,
  children: any[]
) => string | Record<string, any>;
export type SearchFn = (term: string, item: any) => boolean;
export type TrackByFn = (item: any) => any;

export function isDefined(value: any) {
  return value !== undefined && value !== null;
}

let nextUniqueId = 0;

@Component({
  selector: 'mtx-select',
  exportAs: 'mtxSelect',
  host: {
    '[attr.id]': 'id',
    '[attr.aria-describedby]': '_ariaDescribedby || null',
    '[class.mtx-select-floating]': 'shouldLabelFloat',
    '[class.mtx-select-invalid]': 'errorState',
    'class': 'mtx-select',
  },
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: MtxSelectComponent }],
})
export class MtxSelectComponent
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    AfterViewInit,
    ControlValueAccessor,
    MatFormFieldControl<any>
{
  @ViewChild('ngSelect', { static: true }) ngSelect!: NgSelectComponent;

  // MtxSelect custom templates
  @ContentChild(MtxSelectOptionTemplateDirective, { read: TemplateRef })
  optionTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectOptgroupTemplateDirective, { read: TemplateRef })
  optgroupTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectLabelTemplateDirective, { read: TemplateRef })
  labelTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectMultiLabelTemplateDirective, { read: TemplateRef })
  multiLabelTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectHeaderTemplateDirective, { read: TemplateRef })
  headerTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectFooterTemplateDirective, { read: TemplateRef })
  footerTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectNotFoundTemplateDirective, { read: TemplateRef })
  notFoundTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectTypeToSearchTemplateDirective, { read: TemplateRef })
  typeToSearchTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectLoadingTextTemplateDirective, { read: TemplateRef })
  loadingTextTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectTagTemplateDirective, { read: TemplateRef })
  tagTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectLoadingSpinnerTemplateDirective, { read: TemplateRef })
  loadingSpinnerTemplate!: TemplateRef<any>;

  @ContentChildren(MtxOptionComponent, { descendants: true })
  mtxOptions!: QueryList<MtxOptionComponent>;

  /** MtxSelect options */
  @Input() addTag: boolean | AddTagFn = false;
  @Input() addTagText = 'Add item';
  @Input() appearance = 'underline';
  @Input() appendTo!: string;
  @Input() bindLabel!: string;
  @Input() bindValue!: string;
  @Input() closeOnSelect = true;
  @Input() clearAllText = 'Clear all';
  @Input() clearable = true;
  @Input() clearOnBackspace = true;
  @Input() compareWith!: CompareWithFn;
  @Input() dropdownPosition: DropdownPosition = 'auto';
  @Input() groupBy!: string | (() => void);
  @Input() groupValue!: GroupValueFn;
  @Input() selectableGroup = false;
  @Input() selectableGroupAsModel = true;
  @Input() hideSelected = false;
  @Input() isOpen!: boolean;
  @Input() loading = false;
  @Input() loadingText = 'Loading...';
  @Input() labelForId: string | null = null;
  @Input() markFirst = true;
  @Input() maxSelectedItems!: number;
  @Input() multiple = false;
  @Input() notFoundText = 'No items found';
  @Input() searchable = true;
  @Input() readonly = false;
  @Input() searchFn: SearchFn | null = null;
  @Input() searchWhileComposing = true;
  @Input() selectOnTab = false;
  @Input() trackByFn: TrackByFn | null = null;
  @Input() inputAttrs: { [key: string]: string } = {};
  @Input() tabIndex!: number;
  @Input() openOnEnter!: boolean;
  @Input() minTermLength = 0;
  @Input() editableSearchTerm = false;
  @Input() keyDownFn = (_: KeyboardEvent) => true;
  @Input() virtualScroll = false;
  @Input() typeToSearchText = 'Type to search';
  @Input() typeahead!: Subject<string>;

  @Output('blur') blurEvent = new EventEmitter();
  @Output('focus') focusEvent = new EventEmitter();
  @Output('change') changeEvent = new EventEmitter();
  @Output('open') openEvent = new EventEmitter();
  @Output('close') closeEvent = new EventEmitter();
  @Output('search') searchEvent = new EventEmitter<{ term: string; items: any[] }>();
  @Output('clear') clearEvent = new EventEmitter();
  @Output('add') addEvent = new EventEmitter();
  @Output('remove') removeEvent = new EventEmitter();
  @Output('scroll') scroll = new EventEmitter<{ start: number; end: number }>();
  @Output('scrollToEnd') scrollToEnd = new EventEmitter();

  @Input()
  get clearSearchOnAdd() {
    return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  private _clearSearchOnAdd!: boolean;

  @Input()
  get items() {
    return this._items;
  }
  set items(value: any[]) {
    this._itemsAreUsed = true;
    this._items = value;
  }
  private _items: any[] = [];
  private _itemsAreUsed!: boolean;
  private readonly _destroy$ = new Subject<void>();

  /** Value of the select control. */
  @Input()
  get value(): any {
    return this._value;
  }
  set value(newValue: any) {
    this._value = newValue;
    this._onChange(newValue);
    this.stateChanges.next();
  }
  private _value = null;

  /** Implemented as part of MatFormFieldControl. */
  readonly stateChanges: Subject<void> = new Subject<void>();

  /** Unique id of the element. */
  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  private _id!: string;

  /** Unique id for this input. */
  private _uid = `mtx-select-${nextUniqueId++}`;

  /** Placeholder to be shown if value is empty. */
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder!: string;

  /** Whether the input is focused. */
  get focused(): boolean {
    return this._focused;
  }
  private _focused = false;

  get empty(): boolean {
    return this.value == null || (Array.isArray(this.value) && this.value.length === 0);
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.readonly = this._disabled;
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  private _disabled = false;

  errorState = false;

  /** A name for this control that can be used by `mat-form-field`. */
  controlType = 'mtx-select';

  /** The aria-describedby attribute on the select for improved a11y. */
  _ariaDescribedby!: string;

  /** `View -> model callback called when value changes` */
  _onChange: (value: any) => void = () => {};

  /** `View -> model callback called when select has been touched` */
  _onTouched = () => {};

  constructor(
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      if (this._focused && !origin) {
        this._onTouched();
      }
      this._focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    // Fix compareWith warning of undefined value
    // https://github.com/ng-select/ng-select/issues/1537
    if (this.compareWith) {
      this.ngSelect.compareWith = this.compareWith;
    }
  }

  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this._setItemsFromMtxOptions();
    }
  }

  ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState = (this.ngControl.invalid && this.ngControl.touched) as boolean;
      this.stateChanges.next();
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /** Implemented as part of MatFormFieldControl. */
  setDescribedByIds(ids: string[]) {
    this._ariaDescribedby = ids.join(' ');
  }

  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  /** Implemented as part of MatFormFieldControl. */
  onContainerClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (/mat-form-field|mtx-select/g.test(target.parentElement?.classList[0] || '')) {
      this.focus();
      this.open();
    }
  }

  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value: any): void {
    this.value = value;
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /** NgSelect: _setItemsFromNgOptions */
  private _setItemsFromMtxOptions() {
    const mapMtxOptions = (options: QueryList<MtxOptionComponent>) => {
      this.items = options.map(option => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled,
      }));
      this.ngSelect.itemsList.setItems(this.items);
      if (this.ngSelect.hasValue) {
        this.ngSelect.itemsList.mapSelectedItems();
      }
      this.ngSelect.detectChanges();
    };

    const handleOptionChange = () => {
      const changedOrDestroyed = merge(this.mtxOptions.changes, this._destroy$);
      merge(...this.mtxOptions.map(option => option.stateChange$))
        .pipe(takeUntil(changedOrDestroyed))
        .subscribe(option => {
          const item = this.ngSelect.itemsList.findItem(option.value);
          item.disabled = option.disabled;
          item.label = option.label || item.label;
          this.ngSelect.detectChanges();
        });
    };

    this.mtxOptions.changes
      .pipe(startWith(this.mtxOptions), takeUntil(this._destroy$))
      .subscribe(options => {
        mapMtxOptions(options);
        handleOptionChange();
      });
  }

  open() {
    this.ngSelect.open();
  }

  close() {
    this.ngSelect.close();
  }

  focus() {
    this.ngSelect.focus();
  }

  blur() {
    this.ngSelect.blur();
  }

  static ngAcceptInputType_required: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
}
