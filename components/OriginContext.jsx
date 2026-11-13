'use client';
// Lets the product-page sections know which resin they belong to, so the Himalayan Collection resin
// shows its own altitude and fulvic acid figure (see lib/origin.js).
import { createContext, useContext, useMemo } from 'react';
import { pdpText } from '@/lib/pdp';
import { localizeOrigin, isHimalayan, fulvicOf } from '@/lib/origin';

const Ctx = createContext(null);

export function OriginProvider({ handle, children }) {
  return <Ctx.Provider value={handle}>{children}</Ctx.Provider>;
}

export const useHandle = () => useContext(Ctx);
export const useFulvic = () => fulvicOf(useContext(Ctx));

// Same as pdpText(lang), adjusted for the current product.
export function usePdp(lang) {
  const handle = useContext(Ctx);
  return useMemo(() => (isHimalayan(handle) ? localizeOrigin(pdpText(lang), lang) : pdpText(lang)), [handle, lang]);
}
