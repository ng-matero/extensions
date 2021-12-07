import {
  animate,
  style,
  transition,
  trigger,
  keyframes,
  AnimationTriggerMetadata,
} from '@angular/animations';

/**
 * Animations used by the colorpicker.
 * @docs-private
 */
export const mtxColorpickerAnimations: {
  readonly transformPanel: AnimationTriggerMetadata;
} = {
  /** Transforms the height of the colorpicker's panel. */
  transformPanel: trigger('transformPanel', [
    transition(
      'void => enter-dropdown',
      animate(
        '120ms cubic-bezier(0, 0, 0.2, 1)',
        keyframes([
          style({ opacity: 0, transform: 'scale(1, 0.8)' }),
          style({ opacity: 1, transform: 'scale(1, 1)' }),
        ])
      )
    ),
    transition(
      'void => enter-dialog',
      animate(
        '150ms cubic-bezier(0, 0, 0.2, 1)',
        keyframes([
          style({ opacity: 0, transform: 'scale(0.7)' }),
          style({ transform: 'none', opacity: 1 }),
        ])
      )
    ),
    transition('* => void', animate('100ms linear', style({ opacity: 0 }))),
  ]),
};
