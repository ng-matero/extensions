import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Optional,
  Self,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  Inject,
  DoCheck,
  ViewChild,
  Host,
  AfterViewInit,
  NgZone,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { _supportsShadowDom } from '@angular/cdk/platform';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subject, Observable, merge, fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Color } from 'ngx-color';

let nextUniqueId = 0;

@Component({
  selector: 'mtx-color-picker',
  exportAs: 'mtxColorPicker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: MtxColorPickerComponent }],
})
export class MtxColorPickerComponent
  implements OnDestroy, DoCheck, AfterViewInit, ControlValueAccessor, MatFormFieldControl<any> {
  /** Value of the color picker control. */
  @Input()
  get value(): string | null {
    return this._value;
  }
  set value(newValue: string | null) {
    this._value = newValue;
    this._onChange(newValue);
    this.stateChanges.next();
  }
  private _value: string | null = '';

  /** Implemented as part of MatFormFieldControl. */
  readonly stateChanges: Subject<void> = new Subject<void>();

  /** Unique id for this input. */
  private _uid = `mtx-color-picker-${nextUniqueId++}`;

  /** Unique id of the element. */
  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  private _id: string;

  /** Placeholder to be shown if value is empty. */
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  /** Whether the input is focused. */
  get focused(): boolean {
    return this._focused || this._panelOpen;
  }
  private _focused = false;

  get empty(): boolean {
    return !this.value;
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
    this.stateChanges.next();
  }
  private _disabled = false;

  errorState = false;

  /** A name for this control that can be used by `mat-form-field`. */
  controlType = 'mtx-color-picker';

  /** The aria-describedby attribute on the color picker for improved a11y. */
  _ariaDescribedby: string;

  /** `View -> model callback called when value changes` */
  _onChange: (value: any) => void = () => {};

  /** `View -> model callback called when color picker has been touched` */
  _onTouched = () => {};

  /** Event emitted when the color changed */
  @Output() readonly colorChange = new EventEmitter<{ color: Color; $event: MouseEvent }>();

  @ViewChild(MatMenuTrigger, { static: true }) trigger: MatMenuTrigger;

  /** Whether or not the overlay panel is open. */
  _panelOpen = false;

  /** The subscription for closing actions (some are bound to document). */
  private _closingActionsSubscription: Subscription;

  /** Whether the element is inside of a ShadowRoot component. */
  private _isInsideShadowRoot: boolean;

  /**
   * Whether the color picker can open the next time it is focused. Used to prevent a focused,
   * closed color picker from being reopened if the user switches to another browser tab and then
   * comes back.
   */
  private _canOpenOnNextFocus = true;

  /**
   * Event handler for when the window is blurred. Needs to be an
   * arrow function in order to preserve the context.
   */
  private _windowBlurHandler = () => {
    // If the user blurred the window while the color picker is focused, it means that it'll be
    // refocused when they come back. In this case we want to skip the first focus event, if the
    // pane was closed, in order to avoid reopening it unintentionally.
    this._canOpenOnNextFocus =
      this._document.activeElement !== this._elementRef.nativeElement || this._panelOpen;
  };

  constructor(
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    private _zone: NgZone,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() @Host() private _formField: MatFormField,
    @Optional() @Inject(DOCUMENT) private _document: any
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

  ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState = (this.ngControl.invalid && this.ngControl.touched) as boolean;
      this.stateChanges.next();
    }
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this._zone.runOutsideAngular(() => {
        window.addEventListener('blur', this._windowBlurHandler);
      });

      if (_supportsShadowDom()) {
        const element = this._elementRef.nativeElement;
        const rootNode = element.getRootNode ? element.getRootNode() : null;

        // We need to take the `ShadowRoot` off of `window`, because the built-in types are
        // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.
        this._isInsideShadowRoot = rootNode instanceof (window as any).ShadowRoot;
      }
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /** Implemented as part of MatFormFieldControl. */
  setDescribedByIds(ids: string[]) {
    this._ariaDescribedby = ids.join(' ');
  }

  /** Implemented as part of MatFormFieldControl. */
  onContainerClick() {
    this._handleFocus();
  }

  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value New value to be written to the model.
   */
  writeValue(value: string | null): void {
    this.value = value || '';
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  /** Open panel with input focus event. */
  _handleFocus() {
    this.trigger.openMenu();

    this._closingActionsSubscription = merge(this._getOutsideClickStream())
      .pipe()
      .subscribe(event => {
        this.trigger.closeMenu();
        this._closingActionsSubscription.unsubscribe();
      });
  }

  /** Opens the overlay panel. */
  _openPanel() {
    if (this._focused) {
      this._panelOpen = true;
    }
  }

  /** Closes the overlay panel and focuses the host element. */
  _closePanel() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this._changeDetectorRef.markForCheck();
      this._onTouched();
    }
  }

  /** The callback of color changed. */
  _onColorChanged(model: { color: Color; $event: MouseEvent }) {
    this.value = model.color.hex;
    this.colorChange.emit({ color: model.color, $event: model.$event });
  }

  /** Stream of clicks outside of the color picker panel. */
  private _getOutsideClickStream(): Observable<any> {
    return merge(
      fromEvent(this._document, 'click') as Observable<MouseEvent>,
      fromEvent(this._document, 'touchend') as Observable<TouchEvent>
    ).pipe(
      filter(event => {
        // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
        // fall back to check the first element in the path of the click event.
        const clickTarget = (this._isInsideShadowRoot && event.composedPath
          ? event.composedPath()[0]
          : event.target) as HTMLElement;
        const formField = this._formField ? this._formField._elementRef.nativeElement : null;

        return (
          clickTarget !== this._elementRef.nativeElement &&
          (!formField || !formField.contains(clickTarget))
        );
      })
    );
  }
}
