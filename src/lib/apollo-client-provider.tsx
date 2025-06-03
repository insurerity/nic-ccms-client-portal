"use client";

import { ApolloProvider } from "@apollo/client";
import React, { ReactNode, useEffect } from "react";
import { useApollo } from "./apollo";
import { initLogger, setLoggerUserId } from "./logger"; 

const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  const client = useApollo();

  useEffect(() => {
    if (client) {
      initLogger(client /*, user?.id */);
    }
  }, [client]); 

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
