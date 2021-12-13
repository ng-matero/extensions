import { Component } from '@angular/core';
import { EXAMPLE_DATA } from '../../data';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  langs = [
    { label: '中文简体', value: 'zh-CN' },
    { label: 'English', value: 'en-US' },
  ];
  defaultlang = 'zh-CN';

  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs.map(item => item.value));
    translate.setDefaultLang(this.defaultlang);
  }
}
