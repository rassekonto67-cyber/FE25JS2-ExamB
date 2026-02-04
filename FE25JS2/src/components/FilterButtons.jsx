import React from "react";

const FilterButtons = ({ filter, setFilter }) => (
  <div className="filter-buttons" aria-label="Filter clothes">
    <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
    <button className={filter === "men" ? "active" : ""} onClick={() => setFilter("men")}>Men</button>
    <button className={filter === "women" ? "active" : ""} onClick={() => setFilter("women")}>Women</button>
  </div>
);

export default FilterButtons;
