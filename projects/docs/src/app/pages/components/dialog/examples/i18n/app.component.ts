import { Component } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dialog-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private mtxDialog: MtxDialog, public translate: TranslateService) {
    translate.addLangs(this.langs.map(item => item.value));
    translate.setDefaultLang(this.defaultlang);
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
