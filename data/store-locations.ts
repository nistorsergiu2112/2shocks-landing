export const storeLocations = ["header-desktop", "header-mobile", "hero", "free-plan", "plus-plan", "closing", "footer", "guide", "guide-index"] as const;
export type StoreLocation = (typeof storeLocations)[number];
