import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MtxDialog } from '@ng-matero/extensions/dialog';

@Component({
  selector: 'dialog-basic-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatButtonModule],
})
export class App {
  private mtxDialog = inject(MtxDialog);

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
