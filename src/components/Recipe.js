import React, { useState, useContext } from "react";
import { ModalContext } from "../context/ModalProvider";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: ".25rem"
  }
}));

const Recipe = ({ recipe }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { recipeDetail, setIdRecipe, setRecipeDetail } = useContext(
    ModalContext
  );

  const showIngredients = recipeDetail => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (recipeDetail[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {recipeDetail[`strMeasure${i}`]} -{" "}
            {recipeDetail[`strIngredient${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

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
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          />

          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              setRecipeDetail({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2 className="font-bold text-xl mb-2">
                {recipeDetail.strDrink}
              </h2>
              <h3 className="font-semibold text-gray-700 mt-4 mb-2">
                Instructions
              </h3>
              <p className="text-gray-700 text-base mb-2">
                {recipeDetail.strInstructions}
              </p>
              <img
                className="w-full h-64 object-cover"
                src={recipeDetail.strDrinkThumb}
                alt={`${recipeDetail.strDrink}`}
              />

              <h3 className="font-semibold text-gray-700 mt-4 mb-2">
                Ingredients and quantities
              </h3>
              <ul>{showIngredients(recipeDetail)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
