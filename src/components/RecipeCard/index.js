import React from "react";
import "./index.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imgUrl} alt={recipe.name} className="recipe-image" />
      
      {/* Overlay for Name & Chef */}
      <div className="recipe-overlay">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="chef"><i className="fas fa-user"></i> {recipe.chef}</p>
      </div>

      {/* Slide-up details */}
      <div className="recipe-details">
        <p className="meal-type"><i className="fas fa-utensils"></i> {recipe.mealType} • {recipe.dishType}</p>
        <p className="description"><i className="fas fa-info-circle"></i> {recipe.description}</p>
        <div className="ratings"><i className="fas fa-star"></i> {recipe.avgRating} ({recipe.totalRatings} reviews)</div>
        <p className="uploaded"><i className="fas fa-calendar-alt"></i> {recipe.uploadedOn}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
