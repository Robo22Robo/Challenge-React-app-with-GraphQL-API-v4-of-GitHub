import React, { useState } from "react";

let SearchParams = () => {
  let [repositoryOwnerVarChange, setRepositoryOwnerVarChange] = useState(
    "nuwave"
  );

  return (
    <div className="search-params">
      <h1>{repositoryOwnerVarChange}</h1>
      <form>
        <label htmlFor="repositoryOwnerVarChange">
          repositoryOwnerVarChange
          <input
            id="repositoryOwnerVarChange"
            value={repositoryOwnerVarChange}
            placeholder="repositoryOwnerVarChange"
            onChange={e => setRepositoryOwnerVarChange(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
