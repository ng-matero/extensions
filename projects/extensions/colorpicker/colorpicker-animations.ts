/**
 * Animations used by the colorpicker.
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
export const mtxColorpickerAnimations: {
  readonly transformPanel: any;
} = {
  // Represents:
  // transformPanel: trigger('transformPanel', [
  //   transition(
  //     'void => enter-dropdown',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       keyframes([
  //         style({ opacity: 0, transform: 'scale(1, 0.8)' }),
  //         style({ opacity: 1, transform: 'scale(1, 1)' }),
  //       ])
  //     )
  //   ),
  //   transition('* => void', animate('100ms linear', style({ opacity: 0 }))),
  // ]),

  /** Transforms the height of the colorpicker's panel. */
  transformPanel: {
    type: 7,
    name: 'transformPanel',
    definitions: [
      {
        type: 1,
        expr: 'void => enter-dropdown',
        animation: {
          type: 4,
          styles: {
            type: 5,
            steps: [
              { type: 6, styles: { opacity: 0, transform: 'scale(1, 0.8)' }, offset: null },
              { type: 6, styles: { opacity: 1, transform: 'scale(1, 1)' }, offset: null },
            ],
          },
          timings: '120ms cubic-bezier(0, 0, 0.2, 1)',
        },
        options: null,
      },
      {
        type: 1,
        expr: '* => void',
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 0 }, offset: null },
          timings: '100ms linear',
        },
        options: null,
      },
    ],
    options: {},
  },
};
