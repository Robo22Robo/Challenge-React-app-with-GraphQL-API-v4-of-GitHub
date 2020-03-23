import React from "react";

import styled from "styled-components";

import { gql } from "apollo-boost";

import { Query } from "react-apollo";

import "styled-components/macro";

import RepoCard from "./RepoCard";

const GET_PULL_REQUESTS = gql`
  query($repositoryOwner: String!, $repository: String!) {
    repositoryOwner(login: $repositoryOwner) {
      repository(name: $repository) {
        name

        pullRequests(last: 10) {
          totalCount

          nodes {
            id

            title

            closed
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

const Column = ({ repositoryOwner, repository }) => (
  <ColumnWrapper>
    <h3>List of pull requests (last 10)</h3>

    <Query
      query={GET_PULL_REQUESTS}
      variables={{ repositoryOwner, repository }}
    >
      {({ data, error, loading }) => (
        <>
          {loading && <div>loading ... </div>}

          {error && <div>{JSON.stringify(error)}</div>}

          {data && data.repositoryOwner && (
            <div>
              <h2>
                {data.repositoryOwner.repository.name} (
                {data.repositoryOwner.repository.pullRequests.totalCount})
              </h2>

              <h3>Pull requests</h3>

              {data.repositoryOwner.repository.pullRequests.nodes.map(
                (pull, id) => (
                  <p key={id}>{pull.title} </p>
                )
              )}
            </div>
          )}
        </>
      )}
    </Query>
  </ColumnWrapper>
);

export default Column;
