import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-custom-cell-template-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxGridModule, MatSlideToggleModule],
})
export class App implements OnInit {
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
