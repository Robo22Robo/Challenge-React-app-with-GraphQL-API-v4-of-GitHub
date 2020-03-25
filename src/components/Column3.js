import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "styled-components/macro";

const GET_CLOSED_ISSUES = gql`
  query($repositoryOwner: String!, $repository: String!) {
    repositoryOwner(login: $repositoryOwner) {
      repository(name: $repository) {
        name
        issues(states: [CLOSED], last: 10) {
          totalCount
          nodes {
            title
          }
          edges {
            node {
              createdAt
              title
              id
              url
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

const Column3 = ({ repositoryOwner, repository }) => (
  <ColumnWrapper>
    <Query
      query={GET_CLOSED_ISSUES}
      variables={{ repositoryOwner, repository }}
    >
      {({ data, error, loading }) => (
        <>
          {loading && <div>loading ... </div>}
          {error && <div>{JSON.stringify(error)}</div>}
          {data && data.repositoryOwner && data.repositoryOwner.repository && (
            <div>
              <h3>{data.repositoryOwner.repository.name}</h3>
              <h3>
                List of closed issues (last 10) from{" "}
                {data.repositoryOwner.repository.issues.totalCount}
                <hr />
              </h3>

              <h3>Closed issues:</h3>

              {data.repositoryOwner.repository.issues.nodes.map((pull, id) => (
                <p key={id}>{pull.title} </p>
              ))}
            </div>
          )}
        </>
      )}
    </Query>
  </ColumnWrapper>
);

export default Column3;
