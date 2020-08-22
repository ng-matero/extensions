import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-split-pane',
  templateUrl: './split-pane.component.html',
  styleUrls: ['./split-pane.component.scss'],
})
export class SplitPaneComponent {
  constructor(public route: ActivatedRoute) {}
}
