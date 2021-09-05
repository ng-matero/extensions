/** @docs-private */
export function createMissingDateImplError(provider: string) {
  return Error(
    `MatDatetimepicker: No provider found for ${provider}. You must import one of the following ` +
      `modules at your application root: MatNativeDatetimeModule, MatMomentDatetimeModule, or provide a ` +
      `custom implementation.`
  );
}
