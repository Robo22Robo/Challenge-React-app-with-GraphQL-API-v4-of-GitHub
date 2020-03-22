import React, { Fragment } from "react";
import "styled-components/macro";
import "./App.scss";
import { createGlobalStyle } from "styled-components";
import "styled-components/macro";
import Login from "./Login";

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
      <Login />
    </>
  );
}

export default App;
