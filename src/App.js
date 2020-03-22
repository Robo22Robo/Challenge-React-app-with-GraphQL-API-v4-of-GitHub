import React, { Fragment } from "react";
import "styled-components/macro";

import { createGlobalStyle } from "styled-components";
import "styled-components/macro";
import Login from "./Login";
import { HttpLink } from "apollo-link-http";

import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Column from "./components/Column";
import Sidebar from "./components/Sidebar";
import { InMemoryCache } from "apollo-cache-inmemory";

const accessToken = localStorage.getItem("token");
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

// get the authentication token from local storage if it exists

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const Global = createGlobalStyle({
  body: {
    backgroundColor: "#fff",
    color: "#444",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
    padding: 0,
    margin: 0,
    borderTop: "4px solid red"
  },
  "*": {
    boxSizing: "border-box"
  }
});

function App() {
  return (
    <>
      <Global />
      {accessToken ? (
        <ApolloProvider client={client}>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "80px repeat(auto-fit, 300px)",
              alignItems: "start",
              height: "calc(100vh - 4px)",
              overflow: "hidden"
            }}
          >
            <Sidebar />
            <Column repositoryOwner="nuwave" repository="lighthouse" />
            <Column
              repositoryOwner="Robo22Robo"
              repository="Challenge-React-app-with-GraphQL-API-v4-of-GitHub"
            />
          </div>
        </ApolloProvider>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
