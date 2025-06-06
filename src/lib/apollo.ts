import type { NormalizedCacheObject } from "@apollo/client";
import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import type { IncomingMessage, ServerResponse } from "http";
import { useMemo } from "react";
import { NIC_CCMS_CLIENT_PORTAL_TOKEN } from "./utils";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

const authLink = setContext(async (_, { headers }) => {
  function returnToken() {
    const token = localStorage.getItem(NIC_CCMS_CLIENT_PORTAL_TOKEN);

    if (token) {
      return {
        authorization: `Bearer ${token}`,
      };
    } else {
      return {};
    }
  }

  return {
    headers: {
      ...headers,
      // "x-hasura-role": "user",
      ...returnToken(),
    },
  };
});

const wsLink = httpLink;

const link =
  typeof window !== "undefined"
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        authLink.concat(httpLink)
      )
    : httpLink;

export function createApolloClient(_context?: ResolverContext) {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        if (error.extensions?.code === "invalid-jwt") {
          console.error("JWT expired or invalid. Logging out...");

          localStorage.removeItem(NIC_CCMS_CLIENT_PORTAL_TOKEN);

          window.location.href = "/login";
        }
      }
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });
  return new ApolloClient({
    ssrMode: false,
    link: from([errorLink, link]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
) {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo() {
  const store = useMemo(() => initializeApollo(), []);
  return store;
}
