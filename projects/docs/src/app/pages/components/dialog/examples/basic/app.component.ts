import { Component } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions';

@Component({
  selector: 'dialog-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private mtxDialog: MtxDialog) {}

  alert() {
    this.mtxDialog.alert(`My name is Zongbin!`, '', () => {
      this.mtxDialog.alert(`Glad to meet you!`);
    });
  }

  confirm() {
    this.mtxDialog.confirm(
      `What's your name?`,
      '',
      () => {
        this.mtxDialog.alert(`Hi, Zongbin!`);
      },
      () => {
        this.mtxDialog.alert(`I don't know.`);
      }
    );
  }

  open() {
    this.mtxDialog.open({
      title: 'This is the title',
      description: 'You can write some messages here.',
      showCloseIcon: true,
      buttons: [
        {
          color: '',
          text: 'CLOSE',
          onClick: () => {
            this.mtxDialog.alert(`You click Close button.`);
          },
        },
        {
          color: 'primary',
          text: 'VIEW',
          onClick: () => {
            this.mtxDialog.alert(`You click View button.`);
          },
        },
        {
          color: 'warn',
          text: 'OK',
          focusInitial: true,
          onClick: () => {
            this.mtxDialog.alert(`You click Ok button.`);
          },
        },
      ],
    });
  }
}
