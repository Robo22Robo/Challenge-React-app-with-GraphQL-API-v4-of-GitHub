import React from "react";

let SearchParams = props => {
  return (
    <div style={{ marginLeft: "50px" }}>
      <h3>{props.repositoryOwnerVarChange}</h3>
      <h3>{props.repositoryVarChange}</h3>

      <form>
        <label htmlFor="repositoryOwnerVarChange">
          Choose repositoryOwner:
          <input
            id="repositoryOwnerVarChange"
            value={props.repositoryOwnerVarChange}
            placeholder="repositoryOwnerVarChange"
            onChange={e => props.changeRepositoryOwner(e.target.value)}
          />
        </label>

        <label htmlFor="repositoryVarChange">
          Choose the repository:
          <input
            id="repositoryVarChange"
            value={props.repositoryVarChange}
            placeholder="repositoryVarChange"
            onChange={e => props.changeRepositoryVar(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
