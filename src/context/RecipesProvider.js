import React, { useState, useEffect, createContext } from "react";

export const RecipesContext = createContext();

const RecipesProvider = props => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearchRecipes] = useState({
    name: "",
    category: ""
  });
  const [request, setRequest] = useState(false);

  const { name, category } = searchRecipes;

  useEffect(() => {
    if (request) {
      const getRecipes = () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        fetch(url)
          .then(resp => resp.json())
          .then(resp => setRecipes(resp.drinks));
      };

      getRecipes();
    }
  }, [searchRecipes]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setSearchRecipes,
        setRequest
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
