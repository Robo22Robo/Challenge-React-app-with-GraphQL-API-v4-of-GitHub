import React, { useState } from "react";

let SearchParams = () => {
  let [repositoryOwnerVar, setRepositoryOwnerVar] = useState("nuwave");

  return (
    <div className="search-params">
      <h1>{repositoryOwnerVar}</h1>
      <form>
        <label htmlFor="repositoryOwnerVar">
          repositoryOwnerVar
          <input
            id="repositoryOwnerVar"
            value={repositoryOwnerVar}
            placeholder="repositoryOwnerVar"
            onChange={e => setRepositoryOwnerVar(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
