import createCache from "@emotion/cache";

/* Allows to easily override MUI styles */
export function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
