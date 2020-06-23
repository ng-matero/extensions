import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent {

  constructor(public route: ActivatedRoute, private router: Router) {
    let r = route;
    while (!r.routeConfig.path) {
      r = r.parent;
    }
  }

  trackByName(index: number, item: any) {
    return item.name;
  }
}
