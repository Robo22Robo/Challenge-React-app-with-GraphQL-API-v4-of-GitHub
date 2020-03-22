import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Photo from "./Photo ";

const GET_VIEWER = gql`
  query {
    viewer {
      avatarUrl
      login
      name
    }
  }
`;

const Sidebar = () => (
  <aside>
    <div>
      <Query query={GET_VIEWER}>
        {({ loading, error, data }) => (
          <>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {data && data.viewer && <p>Hallo {data.viewer.name} </p>}

            {data && data.viewer && (
              <Photo src={data.viewer.avatarUrl} alt={data.viewer.login} />
            )}
            {data && data.viewer && <p> {data.viewer.login} </p>}
          </>
        )}
      </Query>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  </aside>
);

export default Sidebar;
