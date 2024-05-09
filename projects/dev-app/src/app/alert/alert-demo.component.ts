import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MtxAlert, MtxAlertType } from '@ng-matero/extensions/alert';

@Component({
  selector: 'dev-alert-demo',
  templateUrl: 'alert-demo.component.html',
  styleUrl: 'alert-demo.component.scss',
  standalone: true,
  imports: [
    MatRadioGroup,
    ReactiveFormsModule,
    FormsModule,
    MatRadioButton,
    MatCheckbox,
    MatSlider,
    MatSliderThumb,
    MtxAlert,
  ],
})
export class AlertDemoComponent {
  dismissible = false;
  elevation = 0;
  type: MtxAlertType = 'default';

  onClosed(e: any) {
    alert('closed event!');
    console.log(e);
  }
}
