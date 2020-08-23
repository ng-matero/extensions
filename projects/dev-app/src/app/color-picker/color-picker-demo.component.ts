import { Component } from '@angular/core';

@Component({
  selector: 'dev-color-picker-demo',
  templateUrl: './color-picker-demo.component.html',
  styleUrls: ['./color-picker-demo.component.scss'],
})
export class ColorPickerDemoComponent {
  color = '#3f51b5';

  changeColor(e: any) {
    console.log(e);
  }
}
