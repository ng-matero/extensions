import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MtxCheckboxGroupModule,
  MtxCheckboxGroupOption,
} from '@ng-matero/extensions/checkbox-group';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dev-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.html',
  styleUrl: './checkbox-group-demo.scss',
  imports: [MatCheckboxModule, MtxCheckboxGroupModule, ReactiveFormsModule, FormsModule, JsonPipe],
})
export class CheckboxGroupDemo {
  private translate = inject(TranslateService);

  foods: MtxCheckboxGroupOption[] = [
    { label: this.translate.stream('steak'), value: 'steak', color: 'primary', disabled: true },
    { label: this.translate.stream('pizza'), value: 'pizza', color: 'accent' },
    { label: this.translate.stream('tacos'), value: 'tacos', color: 'warn' },
  ];
  selectedFoods = ['steak', 'pizza'];

  cars = ['Ford', 'Chevrolet', 'Dodge'];
  f1 = new UntypedFormControl(['Chevrolet'], Validators.required);
  f2 = new UntypedFormControl(true, Validators.required);

  trackBy = (index: number, item: MtxCheckboxGroupOption) => {
    return item.value;
  };
}
