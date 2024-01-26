/** @docs-private */
export function createMissingDateImplError(provider: string) {
  return Error(
    `MtxDatetimepicker: No provider found for ${provider}. You must add one of the following ` +
      `to your app config: provideNativeDatetimeAdapter, provideDateFnsDatetimeAdapter,` +
      `provideLuxonDatetimeAdapter, provideMomentDatetimeAdapter, or provide a ` +
      `custom implementation.`
  );
}
