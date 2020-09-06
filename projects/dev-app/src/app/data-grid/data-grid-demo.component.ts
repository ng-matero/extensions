import { Component } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/data-grid';
import { EXAMPLE_DATA } from './data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dev-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss'],
})
export class DataGridDemoComponent {
  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('name'),
      field: 'name',
    },
    {
      header: this.translate.stream('weight'),
      field: 'weight',
    },
    {
      header: this.translate.stream('gender'),
      field: 'gender',
    },
    {
      header: this.translate.stream('mobile'),
      field: 'mobile',
    },
    {
      header: this.translate.stream('city'),
      field: 'city',
    },
    {
      header: this.translate.stream('operation'),
      field: 'operation',
      width: '40px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'basic',
          text: this.translate.stream('delete'),
          icon: 'delete',
          tooltip: this.translate.stream('delete'),
          color: 'warn',
          pop: true,
          popTitle: this.translate.stream('confirm_delete'),
          popCloseText: this.translate.stream('close'),
          popOkText: this.translate.stream('ok'),
          click: () => {
            alert('delete');
          },
        },
      ],
    },
  ];

  list = EXAMPLE_DATA;

  constructor(public translate: TranslateService) {}

  trackByName(index: number, item: any) {
    return item.name;
  }
}
