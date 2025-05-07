"use client";

import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";
import { useApollo } from "./apollo";

const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  const client = useApollo();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
