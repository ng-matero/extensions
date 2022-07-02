import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

import { MtxCheckboxGroupOption } from '@ng-matero/extensions/checkbox-group';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dev-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.component.html',
  styleUrls: ['./checkbox-group-demo.component.scss'],
})
export class CheckboxGroupDemoComponent {
  foods: MtxCheckboxGroupOption[] = [
    { label: this.translate.stream('steak'), value: 'steak', color: 'primary', disabled: true },
    { label: this.translate.stream('pizza'), value: 'pizza', color: 'accent' },
    { label: this.translate.stream('tacos'), value: 'tacos', color: 'warn' },
  ];
  selectedFoods = ['steak', 'pizza'];

  cars = ['Ford', 'Chevrolet', 'Dodge'];
  f1 = new UntypedFormControl(['Chevrolet'], Validators.required);
  f2 = new UntypedFormControl(true, Validators.required);

  constructor(public translate: TranslateService) {}
}
