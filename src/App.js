import React, { useState } from "react";
import "styled-components/macro";

import { createGlobalStyle } from "styled-components";
import "styled-components/macro";
import Login from "./Login";
import { HttpLink } from "apollo-link-http";

import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Column from "./components/Column";
import Column2 from "./components/Column2";
import Column3 from "./components/Column3";
import Sidebar from "./components/Sidebar";
import SearchParams from "./components/SearchParams";

import { InMemoryCache } from "apollo-cache-inmemory";

const accessToken = localStorage.getItem("token");
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});

// let repositoryOwnerVar = "Robo22Robo";
// let repositoryVar = "Challenge-React-app-with-GraphQL-API-v4-of-GitHub";

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
  let [repositoryOwnerVarChange, setRepositoryOwnerVarChange] = useState(
    "nuwave"
  );

  let [repositoryVarChange, setRepositoryVarChange] = useState("lighthouse");

  let changeRepositoryOwner = value => {
    setRepositoryOwnerVarChange(value);
  };

  let changeRepositoryVar = value => {
    setRepositoryVarChange(value);
  };

  let repositoryOwnerVar = repositoryOwnerVarChange;
  let repositoryVar = repositoryVarChange;

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
            <SearchParams
              repositoryOwnerVarChange={repositoryOwnerVarChange}
              changeRepositoryOwner={changeRepositoryOwner}
              repositoryVarChange={repositoryVarChange}
              changeRepositoryVar={changeRepositoryVar}
            />

            <Column
              repositoryOwner={repositoryOwnerVar}
              repository={repositoryVar}
            />
            <Column2
              repositoryOwner={repositoryOwnerVar}
              repository={repositoryVar}
            />

            <Column3
              repositoryOwner={repositoryOwnerVar}
              repository={repositoryVar}
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
