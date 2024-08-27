import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MtxPopoverModule } from '@dcnx/mat-extensions/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxPopoverModule, MatButtonModule],
})
export class AppComponent {}
