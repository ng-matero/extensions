import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

/**
 * Animations used by the drawer.
 * @deprecated No longer used. Will be removed.
 * @breaking-change 21.0.0
 */
export const mtxDrawerAnimations: {
  readonly drawerState: AnimationTriggerMetadata;
} = {
  /** Animation that shows and hides a drawer. */
  drawerState: trigger('state', [
    state(
      'void, hidden',
      style({
        'box-shadow': 'none',
        'visibility': 'hidden',
      })
    ),
    state(
      'visible',
      style({
        transform: 'none',
        visibility: 'visible',
      })
    ),
    transition(
      'visible => void, visible => hidden',
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ),
    transition('void => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
  ]),
};
