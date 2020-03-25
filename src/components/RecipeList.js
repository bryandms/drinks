import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesProvider";
import Recipe from "./Recipe";

const RecipeList = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="flex flex-wrap w-full pb-4">
      {recipes.map(recipe => (
        <Recipe key={recipe.idDrink} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
