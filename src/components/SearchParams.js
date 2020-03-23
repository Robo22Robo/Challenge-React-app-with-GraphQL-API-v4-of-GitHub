import React from "react";

let SearchParams = () => {
  let repositoryOwnerVar = "nuwave";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="repositoryOwnerVar">
          repositoryOwnerVar
          <input
            id="repositoryOwnerVar"
            value={repositoryOwnerVar}
            placeholder="repositoryOwnerVar"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
