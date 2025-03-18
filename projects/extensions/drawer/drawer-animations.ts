/**
 * Animations used by the drawer.
 * @deprecated No longer used. Will be removed.
 * @breaking-change 21.0.0
 */
export const mtxDrawerAnimations: {
  readonly drawerState: any;
} = {
  // Represents:
  // drawerState: trigger('state', [
  //   state(
  //     'void, hidden',
  //     style({
  //       'box-shadow': 'none',
  //       'visibility': 'hidden',
  //     })
  //   ),
  //   state(
  //     'visible',
  //     style({
  //       transform: 'none',
  //       visibility: 'visible',
  //     })
  //   ),
  //   transition(
  //     'visible => void, visible => hidden',
  //     animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
  //   ),
  //   transition('void => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
  // ]),

  /** Animation that shows and hides a drawer. */
  drawerState: {
    type: 7,
    name: 'state',
    definitions: [
      {
        type: 0,
        name: 'void, hidden',
        styles: { type: 6, styles: { 'box-shadow': 'none', 'visibility': 'hidden' }, offset: null },
        options: null,
      },
      {
        type: 0,
        name: 'visible',
        styles: { type: 6, styles: { transform: 'none', visibility: 'visible' }, offset: null },
        options: null,
      },
      {
        type: 1,
        expr: 'visible => void, visible => hidden',
        animation: {
          type: 4,
          styles: { type: 6, styles: {}, offset: null },
          timings: '400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
        },
        options: null,
      },
      {
        type: 1,
        expr: 'void => visible',
        animation: {
          type: 4,
          styles: { type: 6, styles: {}, offset: null },
          timings: '150ms cubic-bezier(0, 0, 0.2, 1)',
        },
        options: null,
      },
    ],
    options: {},
  },
};
