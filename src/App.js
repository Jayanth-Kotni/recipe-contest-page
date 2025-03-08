import React from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { recipes } from "./utils/data";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
