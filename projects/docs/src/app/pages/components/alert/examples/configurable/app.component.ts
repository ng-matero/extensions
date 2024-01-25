import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MtxAlert, MtxAlertType } from '@ng-matero/extensions/alert';

@Component({
  selector: 'alert-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatSlider,
    MatSliderThumb,
    MtxAlert,
  ],
})
export class AppComponent {
  type: MtxAlertType = 'info';
  dismissible = false;
  elevation = 3;

  onClosed(e: any) {
    alert('closed event!');
    console.log(e);
  }
}
