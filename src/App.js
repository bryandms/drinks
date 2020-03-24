import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto m-12">
        <div className="flex p-4">
          <Form />
        </div>
      </div>
    </>
  );
};

export default App;
