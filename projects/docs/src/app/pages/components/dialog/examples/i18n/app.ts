import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dialog-i18n-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, MatRadioModule, MatButtonModule],
})
export class App {
  private mtxDialog = inject(MtxDialog);
  translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(this.langs.map(item => item.value));
    this.translate.setDefaultLang(this.defaultlang);
  }

  open() {
    this.mtxDialog.open({
      title: this.translate.stream('title'),
      description: this.translate.stream('description'),
      buttons: [
        {
          text: this.translate.stream('close'),
          onClick: () => {},
        },
        {
          color: 'primary',
          text: this.translate.stream('view'),
          onClick: () => {},
        },
        {
          color: 'warn',
          focusInitial: true,
          text: this.translate.stream('ok'),
          onClick: () => {},
        },
      ],
    });
  }

  langs = [
    { label: '中文简体', value: 'zh-CN' },
    { label: 'English', value: 'en-US' },
  ];
  defaultlang = 'zh-CN';
}
