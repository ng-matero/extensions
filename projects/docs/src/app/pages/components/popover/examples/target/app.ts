import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';

@Component({
  selector: 'popover-target-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, MatRadioModule, MatButtonModule, MtxPopoverModule, CdkDrag],
})
export class App {
  target: any;
}
