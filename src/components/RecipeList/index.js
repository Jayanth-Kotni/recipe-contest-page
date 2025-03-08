import React, { useState } from "react";
import RecipeCard from "../RecipeCard";
import SearchBar from "../SearchBar";
import FilterSidebar from "../FilterSidebar";
import "./index.css";

const RecipeList = ({ recipes }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(lowerCaseTerm) ||
        recipe.chef.toLowerCase().includes(lowerCaseTerm) ||
        recipe.description.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredRecipes(filtered);
  };

  const handleSort = (sortType) => {
    const sortedRecipes = [...filteredRecipes];
    if (sortType === "newest") {
      sortedRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
    } else if (sortType === "oldest") {
      sortedRecipes.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
    } else if (sortType === "highestRating") {
      sortedRecipes.sort((a, b) => b.avgRating - a.avgRating);
    } else if (sortType === "lowestRating") {
      sortedRecipes.sort((a, b) => a.avgRating - b.avgRating);
    }
    setFilteredRecipes(sortedRecipes);
  };

  const handleFilter = (selectedFilters) => {
    const filtered = recipes.filter((recipe) => {
      const matchesAttributes =
        selectedFilters.attributes.length === 0 ||
        (selectedFilters.attributes.includes("Contest Winner") && recipe.contestWinner) ||
        (selectedFilters.attributes.includes("Featured") && recipe.featured) ||
        (selectedFilters.attributes.includes("Test Kitchen-Approved") && recipe.testKitchenApproved);
  
      const matchesMealType =
        selectedFilters.mealType.length === 0 || selectedFilters.mealType.includes(recipe.mealType);
  
      const matchesDishType =
        selectedFilters.dishType.length === 0 || selectedFilters.dishType.includes(recipe.dishType);
  
      return matchesAttributes && matchesMealType && matchesDishType;
    });
  
    setFilteredRecipes(filtered);
  };
  

  const handleClearFilters = () => {
    setFilteredRecipes(recipes);
  };

  return (
    <div className="recipe-list-container">
      <SearchBar onSearch={handleSearch} />

      {/* Filter Icon for Small Screens */}
      <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
        <i className="fas fa-filter"></i> Filters
      </button>

      <div className={`content ${showFilters ? "show-filters" : ""}`}>
        {/* Sidebar will be hidden in small screens */}
        <div className={`filter-sidebar-container ${showFilters ? "visible" : ""}`}>
          <FilterSidebar onSort={handleSort} onFilter={handleFilter} onClearFilters={handleClearFilters} />
        </div>

        {/* Recipe Cards */}
        <div className="recipe-container">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
