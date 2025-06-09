import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxAlertModule, MtxAlertType } from '@ng-matero/extensions/alert';

@Component({
  selector: 'dev-alert-demo',
  templateUrl: 'alert-demo.html',
  styleUrl: 'alert-demo.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MtxAlertModule,
  ],
})
export class AlertDemo {
  dismissible = false;
  elevation = 0;
  type: MtxAlertType = 'default';

  onClosed(e: any) {
    alert('closed event!');
    console.log(e);
  }
}
