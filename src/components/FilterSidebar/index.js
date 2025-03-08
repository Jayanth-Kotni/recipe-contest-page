import React, { useState } from "react";
import "./index.css";

const FilterSidebar = ({ onSort, onFilter, onClearFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    attributes: [],
    mealType: [],
    dishType: [],
  });

  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
      } else {
        updatedFilters[category].push(value);
      }
      onFilter(updatedFilters);
      return updatedFilters;
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      attributes: [],
      mealType: [],
      dishType: [],
    });
    onClearFilters();
  };

  const removeFilter = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
      onFilter(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="filter-sidebar">
      <h3>Sort By</h3>
      <select onChange={handleSortChange}>
        <option value="newest">Upload Date (Newest)</option>
        <option value="oldest">Upload Date (Oldest)</option>
        <option value="highestRating">Rating (Highest)</option>
        <option value="lowestRating">Rating (Lowest)</option>
      </select>

      <h3>Filter By</h3>
      <div className="filter-section">
  <h4>Attributes</h4>
  {["Contest Winner", "Featured", "Test Kitchen-Approved"].map((attr) => (
    <label key={attr}>
      <input
        type="checkbox"
        checked={selectedFilters.attributes.includes(attr)}
        onChange={() => handleFilterChange("attributes", attr)}
      />
      {attr}
    </label>
  ))}
</div>


      <div className="filter-section">
        <h4>Meal Type</h4>
        {["Dinner", "Lunch", "Dessert", "Breakfast"].map((meal) => (
          <label key={meal}>
            <input
              type="checkbox"
              checked={selectedFilters.mealType.includes(meal)}
              onChange={() => handleFilterChange("mealType", meal)}
            />
            {meal}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Dish Type</h4>
        {["Curry", "Pizza", "Seafood", "Soup", "Mexican", "Smoothie"].map((dish) => (
          <label key={dish}>
            <input
              type="checkbox"
              checked={selectedFilters.dishType.includes(dish)}
              onChange={() => handleFilterChange("dishType", dish)}
            />
            {dish}
          </label>
        ))}
      </div>

      <h3>Selected Filters</h3>
      <div className="selected-filters">
        {Object.keys(selectedFilters).map((category) =>
          selectedFilters[category].map((filter) => (
            <span key={filter} className="filter-tag">
              {filter} <button onClick={() => removeFilter(category, filter)}>x</button>
            </span>
          ))
        )}
      </div>

      <button className="clear-filters" onClick={handleClearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
