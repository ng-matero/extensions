import { Injectable } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';

/**
 * Global ripple options for the dev-app. The ripple options are used as a class
 * so that the global options can be changed at runtime.
 */
@Injectable({ providedIn: 'root' })
export class DevAppRippleOptions implements RippleGlobalOptions {
  /** Whether ripples should be disabled */
  disabled = false;
}
