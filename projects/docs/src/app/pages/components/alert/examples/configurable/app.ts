import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxAlertModule, MtxAlertType } from '@ng-matero/extensions/alert';

@Component({
  selector: 'alert-configurable-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, MatRadioModule, MatCheckboxModule, MatSliderModule, MtxAlertModule],
})
export class App {
  type: MtxAlertType = 'info';
  dismissible = false;
  elevation = 0;

  onClosed(e: any) {
    alert('closed event!');
    console.log(e);
  }
}
