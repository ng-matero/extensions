import { Direction } from '@angular/cdk/bidi';
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
