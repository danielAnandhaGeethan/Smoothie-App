import React from "react";
import IngredientsInput from "./IngredientsInput";
import KeywordsInput from "./KeywordsInput";

const Form = ({
  title,
  setTitle,
  preptime,
  setPreptime,
  description,
  setDescription,
  rating,
  setRating,
  ingredientTerm,
  ingredients,
  setIngredients,
  setIngredientTerm,
  keywordTerm,
  setKeywordTerm,
  keywords,
  setKeywords,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="px-2 text-lg text-white">Name</h1>
          <input
            value={title}
            type="text"
            className="shadow-lg px-5 py-2 rounded-full border border-t border-l outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full justify-center">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-lg px-2 text-white">Prep time (in mins)</h1>
            <input
              value={preptime}
              className="shadow-lg px-5 py-2 rounded-full border border-t border-l outline-none"
              onChange={(e) => setPreptime(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <h1 className="px-2 text-lg text-white">Description</h1>
            <textarea
              value={description}
              className="shadow-lg px-5 py-4 resize-none rounded-2xl border border-t border-l h-32 outline-none flex flex-col items-center"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-lg px-2 text-white">Rating</h1>
            <input
              value={rating}
              className="shadow-lg px-5 py-2 rounded-2xl border border-t border-l outline-none"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <IngredientsInput
          ingredientTerm={ingredientTerm}
          setIngredientTerm={setIngredientTerm}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <div></div>
        <KeywordsInput
          keywordTerm={keywordTerm}
          setKeywordTerm={setKeywordTerm}
          keywords={keywords}
          setKeywords={setKeywords}
        />
      </div>
    </div>
  );
};

export default Form;
