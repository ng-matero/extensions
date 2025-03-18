/**
 * Animations used by the mtx-popover component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
export const mtxPopoverAnimations: {
  readonly transformPopover: any;
} = {
  // Represents:
  // transformPopover: trigger('transformPopover', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(0.8)',
  //     })
  //   ),
  //   transition(
  //     'void => enter',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1)',
  //       })
  //     )
  //   ),
  //   transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 }))),
  // ]),

  /** Controls the animation of a popover component's transformation. */
  transformPopover: {
    type: 7,
    name: 'transformPopover',
    definitions: [
      {
        type: 0,
        name: 'void',
        styles: { type: 6, styles: { opacity: 0, transform: 'scale(0.8)' }, offset: null },
        options: null,
      },
      {
        type: 1,
        expr: 'void => enter',
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 1, transform: 'scale(1)' }, offset: null },
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
          timings: '100ms 25ms linear',
        },
        options: null,
      },
    ],
    options: {},
  },
};
