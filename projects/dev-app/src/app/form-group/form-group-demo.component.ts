import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'dev-form-group-demo',
  templateUrl: 'form-group-demo.component.html',
  styleUrls: ['form-group-demo.component.scss'],
})
export class FormGroupDemoComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  selectedFood: string;
  selectedCar: string;

  text: string;

  color: ThemePalette = 'primary';
  required = false;
  disabled = false;
  showFloatLabel = false;
  showSuffix = false;
  showPrefix = false;
}
