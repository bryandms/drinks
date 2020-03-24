import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./components/context/CategoriesProvider";

const App = () => {
  return (
    <CategoriesProvider>
      <Header />

      <div className="container mx-auto m-12">
        <div className="flex p-4">
          <Form />
        </div>
      </div>
    </CategoriesProvider>
  );
};

export default App;
