import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="w-full md:w-1/3 px-2 pb-2">
      <div className="w-full rounded overflow-hidden shadow-lg mb-8 bg-white">
        <img
          className="w-full h-64 object-cover"
          src={recipe.strDrinkThumb}
          alt={`${recipe.strDrink}`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.strDrink}</div>
        </div>
        <div className="px-6 py-4">
          <input
            className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none block bg-red-500 text-white hover:bg-red-400 cursor-pointer"
            type="button"
            value="Show Recipe"
          />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
