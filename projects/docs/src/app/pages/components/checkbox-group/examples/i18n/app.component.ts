import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MtxCheckboxGroup, MtxCheckboxGroupOption } from '@ng-matero/extensions/checkbox-group';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'checkbox-group-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatRadioGroup, FormsModule, NgFor, MatRadioButton, MtxCheckboxGroup, JsonPipe],
})
export class AppComponent {
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

  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs.map(item => item.value));
    translate.setDefaultLang(this.defaultlang);
  }
}
