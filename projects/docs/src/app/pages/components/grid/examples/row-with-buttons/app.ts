import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridModule } from '@ng-matero/extensions/grid';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-row-with-buttons-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxGridModule],
})
export class App {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
    {
      header: 'Operation',
      field: 'operation',
      width: '220px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'file_copy',
          tooltip: 'copy',
          disabled: true,
          click: () => alert('copy'),
        },
        {
          type: 'icon',
          icon: 'edit',
          tooltip: 'Edit',
          click: () => alert('edit'),
        },
        {
          type: 'icon',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          pop: 'Confirm delete?',
          click: () => alert('delete'),
        },
        {
          type: 'icon',
          icon: 'more_vert',
          tooltip: 'More',
          children: [
            {
              icon: 'dialpad',
              text: 'Redial',
              children: [
                {
                  text: 'Vertebrates',
                },
                {
                  text: 'Invertebrates',
                },
              ],
            },
            {
              icon: 'voicemail',
              text: 'Check voice mail',
              disabled: true,
            },
            {
              icon: 'notifications_off',
              text: 'Disable alerts',
              click: () => alert('Disable alerts'),
            },
          ],
        },
      ],
    },
  ];

  list = EXAMPLE_DATA;
}
