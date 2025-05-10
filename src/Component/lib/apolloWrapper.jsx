"use client";

import { client } from "../api/api";

// import { client } from "../Pages/HeroSection";
const { ApolloProvider } = require("@apollo/client");

export const ApolloWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
