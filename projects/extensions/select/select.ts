import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  Self,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
  NgForm,
  Validators,
} from '@angular/forms';
import {
  CanDisable,
  ErrorStateMatcher,
  mixinDisabled,
  mixinErrorState,
} from '@angular/material/core';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { NgSelectComponent } from '@ng-select/ng-select';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { MtxOption } from './option';
import {
  MtxSelectFooterTemplate,
  MtxSelectHeaderTemplate,
  MtxSelectLabelTemplate,
  MtxSelectLoadingSpinnerTemplate,
  MtxSelectLoadingTextTemplate,
  MtxSelectMultiLabelTemplate,
  MtxSelectNotFoundTemplate,
  MtxSelectOptgroupTemplate,
  MtxSelectOptionTemplate,
  MtxSelectTagTemplate,
  MtxSelectTypeToSearchTemplate,
} from './templates';

export type DropdownPosition = 'bottom' | 'top' | 'auto';
export type AddTagFn = (term: string) => any;
export type CompareWithFn = (a: any, b: any) => boolean;
export type GroupValueFn = (
  key: string | Record<string, any>,
  children: any[]
) => string | Record<string, any>;
export type SearchFn = (term: string, item: any) => boolean;
export type TrackByFn = (item: any) => any;

/**
 * Represents the default options for the select that can be configured
 * using the `MTX_SELECT_DEFAULT_OPTIONS` injection token.
 */
export interface MtxSelectDefaultOptions {
  placeholder?: string;
  notFoundText?: string;
  typeToSearchText?: string;
  addTagText?: string;
  loadingText?: string;
  clearAllText?: string;
  appendTo?: string;
  bindValue?: string;
  bindLabel?: string;
  openOnEnter?: boolean;
  clearSearchOnAdd?: boolean;
}

/** Injection token that can be used to specify default select options. */
export const MTX_SELECT_DEFAULT_OPTIONS = new InjectionToken<MtxSelectDefaultOptions>(
  'mtx-select-default-options'
);

let nextUniqueId = 0;

// Boilerplate for applying mixins to MtxSelect.
/** @docs-private */
const _MtxSelectMixinBase = mixinDisabled(
  mixinErrorState(
    class {
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      readonly stateChanges = new Subject<void>();

      constructor(
        public _defaultErrorStateMatcher: ErrorStateMatcher,
        public _parentForm: NgForm,
        public _parentFormGroup: FormGroupDirective,
        /**
         * Form control bound to the component.
         * Implemented as part of `MatFormFieldControl`.
         * @docs-private
         */
        public ngControl: NgControl
      ) {}
    }
  )
);

@Component({
  selector: 'mtx-select',
  exportAs: 'mtxSelect',
  host: {
    'role': 'combobox',
    'aria-autocomplete': 'none',
    '[attr.id]': 'id',
    '[attr.aria-expanded]': 'panelOpen',
    '[attr.aria-label]': 'ariaLabel || null',
    '[attr.aria-labelledby]': '_getAriaLabelledby()',
    '[attr.aria-describedby]': '_ariaDescribedby || null',
    '[attr.aria-required]': 'required.toString()',
    '[attr.aria-disabled]': 'disabled.toString()',
    '[attr.aria-invalid]': 'errorState',
    '[class.mtx-select-floating]': 'shouldLabelFloat',
    '[class.mtx-select-disabled]': 'disabled',
    '[class.mtx-select-invalid]': 'errorState',
    '[class.mtx-select-required]': 'required',
    '[class.mtx-select-empty]': 'empty',
    '[class.mtx-select-multiple]': 'multiple',
    'class': 'mtx-select',
  },
  templateUrl: './select.html',
  styleUrls: ['./select.scss'],
  inputs: ['disabled'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: MtxSelect }],
})
export class MtxSelect
  extends _MtxSelectMixinBase
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    AfterViewInit,
    ControlValueAccessor,
    CanDisable,
    MatFormFieldControl<any>
{
  @ViewChild('ngSelect', { static: true }) ngSelect!: NgSelectComponent;

  @ContentChild(MtxSelectOptionTemplate, { read: TemplateRef })
  optionTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectOptgroupTemplate, { read: TemplateRef })
  optgroupTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectLabelTemplate, { read: TemplateRef })
  labelTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectMultiLabelTemplate, { read: TemplateRef })
  multiLabelTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectHeaderTemplate, { read: TemplateRef })
  headerTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectFooterTemplate, { read: TemplateRef })
  footerTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectNotFoundTemplate, { read: TemplateRef })
  notFoundTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectTypeToSearchTemplate, { read: TemplateRef })
  typeToSearchTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectLoadingTextTemplate, { read: TemplateRef })
  loadingTextTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectTagTemplate, { read: TemplateRef })
  tagTemplate!: TemplateRef<any>;
  @ContentChild(MtxSelectLoadingSpinnerTemplate, { read: TemplateRef })
  loadingSpinnerTemplate!: TemplateRef<any>;

  @ContentChildren(MtxOption, { descendants: true })
  mtxOptions!: QueryList<MtxOption>;

  @Input() addTag: boolean | AddTagFn = false;
  @Input() addTagText = this._defaultOptions?.addTagText ?? 'Add item';
  @Input() appearance = 'underline';
  @Input() appendTo = this._defaultOptions?.appendTo ?? 'body';
  @Input() bindLabel = this._defaultOptions?.bindLabel;
  @Input() bindValue = this._defaultOptions?.bindValue;
  @Input() closeOnSelect = true;
  @Input() clearAllText = this._defaultOptions?.clearAllText ?? 'Clear all';
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
  @Input() loadingText = this._defaultOptions?.loadingText ?? 'Loading...';
  @Input() labelForId: string | null = null;
  @Input() markFirst = true;
  @Input() maxSelectedItems!: number;
  @Input() multiple = false;
  @Input() notFoundText = this._defaultOptions?.notFoundText ?? 'No items found';
  @Input() searchable = true;
  @Input() readonly = false;
  @Input() searchFn: SearchFn | null = null;
  @Input() searchWhileComposing = true;
  @Input() selectOnTab = false;
  @Input() trackByFn: TrackByFn | null = null;
  @Input() inputAttrs: { [key: string]: string } = {};
  @Input() tabIndex!: number;
  @Input() openOnEnter = this._defaultOptions?.openOnEnter ?? true;
  @Input() minTermLength = 0;
  @Input() editableSearchTerm = false;
  @Input() keyDownFn = (_: KeyboardEvent) => true;
  @Input() virtualScroll = false;
  @Input() typeToSearchText = this._defaultOptions?.typeToSearchText ?? 'Type to search';
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
    return this._clearSearchOnAdd ?? this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  private _clearSearchOnAdd = this._defaultOptions?.clearSearchOnAdd;

  @Input()
  get items() {
    return this._items;
  }
  set items(value: any[]) {
    this._itemsAreUsed = true;
    this._items = value;
  }
  private _items: any[] = [];
  private _itemsAreUsed = false;

  /** Emits whenever the component is destroyed. */
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

  /** Unique id for this select. */
  private _uid = `mtx-select-${nextUniqueId++}`;

  /** Placeholder to be shown if value is empty. */
  @Input()
  get placeholder(): string {
    return this._placeholder!;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder = this._defaultOptions?.placeholder;

  /** Whether the select is focused. */
  get focused(): boolean {
    return this._focused;
  }
  private _focused = false;

  /** Whether the select has a value. */
  get empty(): boolean {
    return this.value == null || (Array.isArray(this.value) && this.value.length === 0);
  }

  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  /** Whether the component is required. */
  @Input()
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required: boolean | undefined;

  /** Object used to control when error messages are shown. */
  @Input() override errorStateMatcher!: ErrorStateMatcher;

  /** Aria label of the select. */
  @Input('aria-label') ariaLabel: string = '';

  /** Input that can be used to specify the `aria-labelledby` attribute. */
  @Input('aria-labelledby') ariaLabelledby: string | null = null;

  /** The aria-describedby attribute on the select for improved a11y. */
  _ariaDescribedby: string | null = null;

  /** A name for this control that can be used by `mat-form-field`. */
  controlType = 'mtx-select';

  /** `View -> model callback called when value changes` */
  _onChange: (value: any) => void = () => {};

  /** `View -> model callback called when select has been touched` */
  _onTouched = () => {};

  /** ID for the DOM node containing the select's value. */
  _valueId = `mtx-select-value-${nextUniqueId++}`;

  /** Whether or not the overlay panel is open. */
  get panelOpen(): boolean {
    return !!this.ngSelect.isOpen;
  }

  /**
   * Keeps track of the previous form control assigned to the select.
   * Used to detect if it has changed.
   */
  private _previousControl: AbstractControl | null | undefined;

  constructor(
    protected _changeDetectorRef: ChangeDetectorRef,
    protected _elementRef: ElementRef,
    protected _focusMonitor: FocusMonitor,
    _defaultErrorStateMatcher: ErrorStateMatcher,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective,
    @Optional() @Self() ngControl: NgControl,
    @Optional() @Inject(MAT_FORM_FIELD) protected _parentFormField?: MatFormField,
    @Optional()
    @Inject(MTX_SELECT_DEFAULT_OPTIONS)
    protected _defaultOptions?: MtxSelectDefaultOptions
  ) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);

    _focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
      if (this._focused && !origin) {
        this._onTouched();
      }
      this._focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }

    // Force setter to be called in case id was not specified.
    // eslint-disable-next-line no-self-assign
    this.id = this.id;
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
    const ngControl = this.ngControl;
    if (this.ngControl) {
      // The disabled state might go out of sync if the form group is swapped out. See #17860.
      if (this._previousControl !== ngControl.control) {
        if (
          this._previousControl !== undefined &&
          ngControl.disabled !== null &&
          ngControl.disabled !== this.disabled
        ) {
          this.disabled = ngControl.disabled;
        }

        this._previousControl = ngControl.control;
      }

      this.updateErrorState();
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }

    const labelId = this._parentFormField?.getLabelId();
    let value = (labelId ? labelId + ' ' : '') + this._valueId;

    if (this.ariaLabelledby) {
      value += ' ' + this.ariaLabelledby;
    }

    return value;
  }

  /** Implemented as part of MatFormFieldControl. */
  setDescribedByIds(ids: string[]) {
    this._ariaDescribedby = ids.length ? ids.join(' ') : null;
  }

  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.readonly = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }

  /** Implemented as part of MatFormFieldControl. */
  onContainerClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (/mat-mdc-form-field|mtx-select/g.test(target.parentElement?.classList[0] || '')) {
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

  /** NgSelect's `_setItemsFromNgOptions` */
  private _setItemsFromMtxOptions() {
    const mapMtxOptions = (options: QueryList<MtxOption>) => {
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

  openChange() {
    this.openEvent.emit();

    // TODO: The ng-select has no `panelClass` prop, so we can add the theme color by the following way.
    setTimeout(() => {
      const dropdownEl = document.getElementById(this.ngSelect.dropdownId) as HTMLElement;
      dropdownEl.classList.add('mat-' + this._parentFormField?.color);
    });
  }

  static ngAcceptInputType_required: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
}
