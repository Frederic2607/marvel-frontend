import React from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const { setName, name } = props;

  const handleSearch = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="J.A.R.V.I.S va rechercher pour toi !"
        className="search-input"
        value={name}
      />
    </div>
  );
};

export default SearchBar;
