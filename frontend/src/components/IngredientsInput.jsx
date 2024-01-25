import React from "react";
import cross from "../assets/cross.png";
import add from "../assets/add.png";

const IngredientsInput = ({
  ingredientTerm,
  setIngredientTerm,
  ingredients,
  setIngredients,
}) => {
  const removeIngredient = (key) => {
    const x = ingredients.filter((ingredient) => ingredient !== key);

    setIngredients(x);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex">
        <div>
          <h1 className="px-2 text-lg text-white">Ingredients</h1>
          <input
            value={ingredientTerm}
            className="shadow-lg px-5 py-2 rounded-2xl border border-t border-l outline-none"
            onChange={(e) => setIngredientTerm(e.target.value)}
          />
        </div>
        <button className="flex flex-col justify-end absolute mt-9 ml-[175px] pl-3">
          <img
            src={add}
            alt="Add"
            className="h-6 hover:scale-105"
            onClick={() => {
              setIngredients([...ingredients, ingredientTerm]);
              setIngredientTerm("");
            }}
          />
        </button>
      </div>
      <div className="w-80">
        <div className="flex flex-wrap">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="m-2">
              <button className="flex flex-row bg-gray-200 gap-1 items-center px-2 py-1 rounded-full justify-center">
                <img
                  src={cross}
                  alt="remove"
                  className="h-5"
                  onClick={() => removeIngredient(ingredient)}
                />
                <span>{ingredient}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientsInput;
