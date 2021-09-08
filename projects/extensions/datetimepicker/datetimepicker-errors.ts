/** @docs-private */
export function createMissingDateImplError(provider: string) {
  return Error(
    `MtxDatetimepicker: No provider found for ${provider}. You must import one of the following ` +
      `modules at your application root: MtxNativeDatetimeModule, MatMomentDatetimeModule, or provide a ` +
      `custom implementation.`
  );
}
