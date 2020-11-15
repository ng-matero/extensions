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
  selectedFood: string;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  color: ThemePalette = 'primary';
  showFloatLabel = false;
}
