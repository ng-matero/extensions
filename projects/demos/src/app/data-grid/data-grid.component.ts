import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
    let r = route;
    while (!r.routeConfig.path) {
      r = r.parent;
    }
  }

  ngOnInit() { }

  trackByName(index: number, item: any) {
    return item.name;
  }

}
