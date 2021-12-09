import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'mtx-form-group',
  host: {
    class: 'mtx-form-group',
  },
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  exportAs: 'mtxFormGroup',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxFormGroupComponent implements AfterContentInit {
  @ContentChildren(MatFormField) formFields!: QueryList<MatFormField>;

  @Input() label!: string;
  @Input()
  get showRequiredMarker(): boolean {
    return this._showRequiredMarker;
  }
  set showRequiredMarker(value: boolean) {
    this._showRequiredMarker = coerceBooleanProperty(value);
  }
  private _showRequiredMarker = false;

  ngAfterContentInit() {
    this.formFields.forEach(item => {
      item.appearance = 'standard';
    });
  }

  static ngAcceptInputType_showRequiredMarker: BooleanInput;
}
