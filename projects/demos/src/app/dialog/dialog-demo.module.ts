import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MtxDialogModule } from '@ng-matero/extensions/dialog';

import { DialogDemoComponent } from './dialog-demo.component';
import { DialogOverviewComponent } from './dialog-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MtxDialogModule,
    RouterModule.forChild([{ path: '', component: DialogDemoComponent }]),
  ],
  declarations: [DialogDemoComponent, DialogOverviewComponent],
  entryComponents: [DialogOverviewComponent],
})
export class DialogDemoModule {}
