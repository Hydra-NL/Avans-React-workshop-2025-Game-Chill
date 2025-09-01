import { InMemoryCache, makeVar } from "@apollo/client";

// Utils
import { isServer } from "@/helpers/api.helper";

/* Reactive variables - Storing local state outside of the Apollo Client cache */
export const isLoadingVar = makeVar(false);
export const userLanguageVar = makeVar(!isServer && (localStorage.getItem("lang") || navigator.language || navigator.userLanguage));

/* Initialize cache */
export const cache = new InMemoryCache({
  typePolicies: {
    // Reactive variables
    Query: {
      isLoading() {
        return isLoadingVar();
      },
      userLanguage() {
        return userLanguageVar();
      },
    },
  },
});
