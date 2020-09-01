import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent {
  constructor(public route: ActivatedRoute) {}
}
