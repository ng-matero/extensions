import { Component } from '@angular/core';

import { MtxDialog } from '@ng-matero/extensions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private mtxDialog: MtxDialog) {}

  alert() {
    this.mtxDialog.alert(`My name is Zongbin!`, () => {
      this.mtxDialog.alert(`Glad to meet you!`);
    });
  }
}
