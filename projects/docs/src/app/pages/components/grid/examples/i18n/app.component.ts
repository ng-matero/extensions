import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MtxGridColumn, MtxGridColumnPinOption, MtxGridModule } from '@dcnx/mat-extensions/grid';
import { TranslateService } from '@ngx-translate/core';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MtxGridModule],
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
      width: '120px',
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
          pop: {
            title: this.translate.stream('confirm_delete'),
            closeText: this.translate.stream('close'),
            okText: this.translate.stream('ok'),
          },
          click: () => alert('delete'),
        },
      ],
    },
  ];

  list = EXAMPLE_DATA;

  columnPinOptions: MtxGridColumnPinOption[] = [
    { label: this.translate.stream('pin_left'), value: 'left' },
    { label: this.translate.stream('pin_right'), value: 'right' },
    { label: this.translate.stream('no_pin'), value: null },
  ];

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
