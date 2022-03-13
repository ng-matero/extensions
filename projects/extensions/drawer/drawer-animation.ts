import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';
import { AnimationCurves, AnimationDurations } from '@angular/material/core';

/** Animations used by the drawer. */
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
      animate(`${AnimationDurations.COMPLEX} ${AnimationCurves.ACCELERATION_CURVE}`)
    ),
    transition(
      'void => visible',
      animate(`${AnimationDurations.EXITING} ${AnimationCurves.DECELERATION_CURVE}`)
    ),
  ]),
};
