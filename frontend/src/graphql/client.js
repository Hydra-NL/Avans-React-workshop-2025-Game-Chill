import { useMemo } from "react";
import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { API_URL, isServer } from "@/helpers/api.helper";
import packageInfo from "../../package.json";
import { cache } from "./cache";

let apolloClient;

/* GraphQL link / with uploads Link */
const httpLink = createHttpLink({
  uri: operation => `${API_URL}/graphql?operationName=${encodeURIComponent(operation.operationName)}`,
  credentials: "include",
});

const link = httpLink;

/* Log any GraphQL errors or network error that occurred */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.info("graphQLErrors:", graphQLErrors);
  if (graphQLErrors) {
    // eslint-disable-next-line consistent-return
    graphQLErrors.map(async ({ extensions }) => {
      if (extensions.code === "UNAUTHENTICATED") {
        console.error("Client error", extensions);
      }
    });
  }
  if (networkError) {
    console.info(networkError);
  }
});

/* Creates the Apollo Client */
const createApolloClient = () => new ApolloClient({
  ssrMode: isServer,
  clientAwareness: {
    name: packageInfo.name,
    version: packageInfo.version,
  },
  devtools: { enabled: !isServer && process.env.NODE_ENV === "development" },
  link: ApolloLink.from([
    errorLink,
    link,
  ]),
  cache,
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy(lastFetchPolicy) {
        if (lastFetchPolicy === "cache-and-network" || lastFetchPolicy === "network-only") {
          return "cache-first";
        }
        return lastFetchPolicy;
      },
    },
  },
});

/* Initialize Apollo */
export const initializeApollo = (initialState = null) => {
  const newApolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = newApolloClient.extract();
    newApolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (isServer) return newApolloClient;

  if (!apolloClient) apolloClient = newApolloClient;
  return newApolloClient;
};

export const useApollo = initialState => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
