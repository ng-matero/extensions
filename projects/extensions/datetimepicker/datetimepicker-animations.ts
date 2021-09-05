import {
  animate,
  AnimationTriggerMetadata,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
export const fadeInContent: AnimationTriggerMetadata = trigger('fadeInContent', [
  state('showing', style({ opacity: 1 })),
  transition('void => showing', [
    style({ opacity: 0 }),
    animate(`150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)`),
  ]),
]);

export const slideCalendar: AnimationTriggerMetadata = trigger('slideCalendar', [
  transition('* => left', [
    animate(
      180,
      keyframes([
        style({ transform: 'translateX(100%)', offset: 0.5 }),
        style({ transform: 'translateX(-100%)', offset: 0.51 }),
        style({ transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
  transition('* => right', [
    animate(
      180,
      keyframes([
        style({ transform: 'translateX(-100%)', offset: 0.5 }),
        style({ transform: 'translateX(100%)', offset: 0.51 }),
        style({ transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
]);
