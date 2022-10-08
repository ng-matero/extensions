import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
} from '@angular/animations';

/**
 * Below are all the animations for the mtx-popover component.
 * Animation duration and timing values are based on AngularJS Material.
 */

/**
 * This animation controls the popover panel's entry and exit from the page.
 *
 * When the popover panel is added to the DOM, it scales in and fades in its border.
 *
 * When the popover panel is removed from the DOM, it simply fades out after a brief
 * delay to display the ripple.
 */

export const transformPopover: AnimationTriggerMetadata = trigger('transformPopover', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'scale(0.8)',
    })
  ),
  transition(
    'void => enter',
    animate(
      '120ms cubic-bezier(0, 0, 0.2, 1)',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    )
  ),
  transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 }))),
]);
