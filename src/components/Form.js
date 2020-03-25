import React, { useState, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: ""
  });

  const { categories } = useContext(CategoriesContext);

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="flex flex-wrap w-full">
      <fieldset className="w-full text-center mb-8">
        <legend>Search drinks by category or ingredient</legend>
      </fieldset>

      <div className="w-full sm:w-1/3 px-2 pb-2">
        <input
          className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none block focus:shadow"
          name="name"
          type="text"
          placeholder="Ingredient"
          onChange={handleChange}
        />
      </div>

      <div className="w-full sm:w-1/3 px-2 pb-2">
        <div className="relative">
          <select
            className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none block focus:shadow"
            name="category"
            onChange={handleChange}
          >
            <option value="">Category</option>
            {categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/3 px-2 pb-2">
        <input
          className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none block bg-red-500 text-white hover:bg-red-400 cursor-pointer"
          type="submit"
          value="Search"
        />
      </div>
    </form>
  );
};

export default Form;
