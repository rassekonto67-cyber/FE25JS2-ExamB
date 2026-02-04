import React from "react";

const SortSelect = ({ sortBy, setSortBy }) => (
  <form className="controls" aria-label="Sort clothes">
    <fieldset>
      <label htmlFor="sort">Sort after: </label>
      <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="none">None</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>
    </fieldset>
  </form>
);

export default SortSelect;
