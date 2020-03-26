import React, { useState, useEffect, createContext } from "react";

export const ModalContext = createContext();

const ModalProvider = props => {
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipeDetail, setRecipeDetail] = useState({});

  useEffect(() => {
    const getRecipe = () => {
      if (!idRecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

      fetch(url)
        .then(resp => resp.json())
        .then(resp => setRecipeDetail(resp.drinks[0]));
    };

    getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider
      value={{
        recipeDetail,
        setIdRecipe,
        setRecipeDetail
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
