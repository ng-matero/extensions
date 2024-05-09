import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MtxGrid, MtxGridColumn } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxGrid, MatSlideToggle],
})
export class AppComponent implements OnInit {
  @ViewChild('statusTpl', { static: true }) statusTpl!: TemplateRef<any>;

  columns: MtxGridColumn[] = [];

  list = EXAMPLE_DATA;

  ngOnInit() {
    this.columns = [
      { header: 'Name', field: 'name' },
      { header: 'Weight', field: 'weight' },
      { header: 'Gender', field: 'gender' },
      { header: 'Mobile', field: 'mobile' },
      { header: 'City', field: 'city' },
      { header: 'Status', field: 'status', cellTemplate: this.statusTpl },
    ];
  }
}
