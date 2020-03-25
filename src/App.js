import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./context/CategoriesProvider";
import RecipesProvider from "./context/RecipesProvider";

const App = () => {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <Header />

        <div className="container mx-auto m-12">
          <div className="flex p-4">
            <Form />
          </div>
        </div>
      </RecipesProvider>
    </CategoriesProvider>
  );
};

export default App;
