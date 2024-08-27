import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MtxPopoverModule } from '@dcnx/mat-extensions/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MatButtonModule, MtxPopoverModule, CdkDrag],
})
export class AppComponent {
  target: any;
}
