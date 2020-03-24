import React, { useState, useEffect, createContext } from "react";

export const CategoriesContext = createContext();

const CategoriesProvider = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      fetch(url)
        .then(resp => resp.json())
        .then(data => setCategories(data.drinks));
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
