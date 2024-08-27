import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxAlertModule, MtxAlertType } from '@dcnx/mat-extensions/alert';

@Component({
  selector: 'alert-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MatCheckboxModule, MatSliderModule, MtxAlertModule],
})
export class AppComponent {
  type: MtxAlertType = 'info';
  dismissible = false;
  elevation = 0;

  onClosed(e: any) {
    alert('closed event!');
    console.log(e);
  }
}
