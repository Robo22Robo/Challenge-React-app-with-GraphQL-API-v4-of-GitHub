import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "styled-components/macro";

import RepoCard from "./RepoCard";

const GET_OPEN_ISSUES = gql`
  query($repositoryOwner: String!, $repository: String!) {
    repositoryOwner(login: $repositoryOwner) {
      repository(name: $repository) {
        issues(states: [OPEN], last: 10) {
          edges {
            node {
              createdAt
              title
              url
              comments(last: 10) {
                edges {
                  node {
                    id
                    body
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ColumnWrapper = styled("section")({
  width: "100%",
  maxWidth: 300,
  backgroundColor: "#fafafa",
  borderRight: "2px solid #eee",
  padding: 15,
  marginLeft: 15,
  height: "calc(100vh - 4px)",
  overflowY: "scroll"
});

const Column2 = ({ repositoryOwner, repository }) => (
  <ColumnWrapper>
    <h3>List of open issues (last 10)</h3>
    <Query query={GET_OPEN_ISSUES} variables={{ repositoryOwner, repository }}>
      {({ data, error, loading }) => (
        <>
          {loading && <div>loading ... </div>}
          {error && <div>{JSON.stringify(error)}</div>}
          {data && data.repositoryOwner && (
            <div>{JSON.stringify(data.repositoryOwner)}</div>
          )}
        </>
      )}
    </Query>
  </ColumnWrapper>
);

export default Column2;
