import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'mtx-form-group',
  host: {
    class: 'mtx-form-group',
  },
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MtxFormGroupComponent implements OnInit, AfterContentInit {
  @ContentChildren(MatFormField) formFields!: QueryList<MatFormField>;

  @Input() label: string;
  @Input()
  get showRequiredMarker() {
    return this._showRequiredMarker;
  }
  set showRequiredMarker(value: boolean) {
    this._showRequiredMarker = coerceBooleanProperty(value);
  }
  private _showRequiredMarker = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.formFields.forEach(item => {
      item.appearance = 'standard';
    });
  }
}
