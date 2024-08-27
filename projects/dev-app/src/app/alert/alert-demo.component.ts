import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxAlertModule, MtxAlertType } from '@dcnx/mat-extensions/alert';

@Component({
  selector: 'dev-alert-demo',
  templateUrl: 'alert-demo.component.html',
  styleUrl: 'alert-demo.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MtxAlertModule,
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
