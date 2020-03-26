import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";
import CategoriesProvider from "./context/CategoriesProvider";
import RecipesProvider from "./context/RecipesProvider";
import ModalProvider from "./context/ModalProvider";

const App = () => {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className="container mx-auto m-12">
            <div className="flex p-4">
              <Form />
            </div>

            <div className="flex p-4">
              <RecipeList />
            </div>
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
};

export default App;
