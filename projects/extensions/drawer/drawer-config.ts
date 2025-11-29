import { Direction } from '@angular/cdk/bidi';
import { DialogRole } from '@angular/cdk/dialog';
import { ScrollStrategy } from '@angular/cdk/overlay';
import { ViewContainerRef } from '@angular/core';

/** Options for where to set focus to automatically on dialog open. */
export type AutoFocusTarget = 'dialog' | 'first-tabbable' | 'first-heading';

/** Possible overrides for a drawer's position. */
export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

/**
 * Configuration used when opening a drawer.
 */
export class MtxDrawerConfig<D = any> {
  /** The view container to place the overlay for the drawer into. */
  viewContainerRef?: ViewContainerRef;

  /** ID for the drawer. If omitted, a unique one will be generated. */
  id?: string;

  /** The ARIA role of the dialog element. */
  role?: DialogRole = 'dialog';

  /** Extra CSS classes to be added to the drawer container. */
  panelClass?: string | string[];

  /** Text layout direction for the drawer. */
  direction?: Direction;

  /** Data being injected into the child component. */
  data?: D | null = null;

  /** Whether the drawer has a backdrop. */
  hasBackdrop?: boolean = true;

  /** Custom class for the backdrop. */
  backdropClass?: string;

  /** Whether the user can use escape or clicking outside to close the drawer. */
  disableClose?: boolean = false;

  /** Aria label to assign to the drawer element. */
  ariaLabel?: string | null = null;

  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal?: boolean = false;

  /**
   * Whether the drawer should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation?: boolean = true;

  /**
   * Where the drawer should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus?: AutoFocusTarget | string | boolean = 'first-tabbable';

  /**
   * Whether the drawer should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus?: boolean = true;

  /** Scroll strategy to be used for the drawer. */
  scrollStrategy?: ScrollStrategy;

  /** Position of the drawer. */
  position?: DrawerPosition = 'right';

  /** Width of the drawer. */
  width?: string;

  /** Height of the drawer. */
  height?: string;

  /** Min-width of the drawer. If a number is provided, assumes pixel units. */
  minWidth?: number | string;

  /** Min-height of the drawer. If a number is provided, assumes pixel units. */
  minHeight?: number | string;

  /** Max-width of the drawer. If a number is provided, assumes pixel units. */
  maxWidth?: number | string;

  /** Max-height of the drawer. If a number is provided, assumes pixel units. */
  maxHeight?: number | string;
}
