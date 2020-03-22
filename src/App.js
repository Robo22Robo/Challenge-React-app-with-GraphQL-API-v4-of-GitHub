import React, { Fragment } from "react";
import "styled-components/macro";
import "./App.scss";
import { createGlobalStyle } from "styled-components";
import "styled-components/macro";
import Login from "./Login";

const accessToken = localStorage.getItem("token");

fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `bearer ${accessToken}`
  },
  body: JSON.stringify({
    query: `
    {
      repositoryOwner(login: "nuwave"){
      repository(name: "lighthouse") {
         ref(qualifiedName: "master"){
          associatedPullRequests(last: 10) {
            edges {
              node {
                
                bodyText
                body
                
                mergeCommit {
                  id
                  message
                }
              }
            }
          }
        }
      }
      }
    }
    `
  })
})
  .then(res => res.json())
  .then(json => console.log(json));

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
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
