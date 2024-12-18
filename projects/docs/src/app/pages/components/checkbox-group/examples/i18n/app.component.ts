import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {
  MtxCheckboxGroupModule,
  MtxCheckboxGroupOption,
} from '@ng-matero/extensions/checkbox-group';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MatRadioModule, FormsModule, MtxCheckboxGroupModule, JsonPipe],
})
export class AppComponent {
  translate = inject(TranslateService);

  foods: MtxCheckboxGroupOption[] = [
    {
      label: this.translate.stream('steak'),
      value: 'steak',
    },
    {
      label: this.translate.stream('pizza'),
      value: 'pizza',
    },
    {
      label: this.translate.stream('tacos'),
      value: 'tacos',
    },
  ];
  selectedFoods = ['steak'];

  langs = [
    { label: '中文简体', value: 'zh-CN' },
    { label: 'English', value: 'en-US' },
  ];
  defaultlang = 'zh-CN';

  constructor() {
    this.translate.addLangs(this.langs.map(item => item.value));
    this.translate.setDefaultLang(this.defaultlang);
  }
}
