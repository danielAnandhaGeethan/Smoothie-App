import React, { useState } from "react";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import axios from "axios";
import Form from "./Form";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preptime, setPreptime] = useState("");
  const [rating, setRating] = useState(null);
  const [ingredientTerm, setIngredientTerm] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [keywordTerm, setKeywordTerm] = useState("");
  const [keywords, setKeywords] = useState([]);

  const addToDatabase = () => {
    if (
      title === "" ||
      description === "" ||
      preptime === "" ||
      rating === "" ||
      ingredients.length === 0 ||
      keywords.length === 0
    ) {
      enqueueSnackbar("Data Incomplete", { variant: "error" });
      return;
    }

    const smoothie = {
      title,
      description,
      preptime: preptime + " minutes",
      rating,
      ingredients,
      keywords,
    };

    setTitle("");
    setDescription("");
    setPreptime("");
    setRating("");
    setIngredients([]);
    setKeywords([]);

    axios.post("http://localhost:5555/smoothies", smoothie).then((res) => {
      enqueueSnackbar("Smoothie Added", {
        variant: "success",
        autoHideDuration: 4000,
      });
    });
  };

  return (
    <div
      className="w-full h-full pt-[67px] pb-10 flex justify-center"
      name="post"
    >
      <SnackbarProvider />
      <div className="flex justify-center mx-10 w-[65%] md:w-[70%] rounded-lg">
        <div className="mx-4 py-6 px-0 md:px-7 my-2 flex flex-col items-center gap-6 bg-black bg-opacity-20 rounded-lg shadow-xl">
          <div>
            <h1 className="text-3xl text-center text-white">
              {"Contribute your recipe and flavor the community".toUpperCase()}
            </h1>
          </div>
          <Form
            title={title}
            setTitle={setTitle}
            preptime={preptime}
            setPreptime={setPreptime}
            description={description}
            setDescription={setDescription}
            rating={rating}
            setRating={setRating}
            ingredientTerm={ingredientTerm}
            ingredients={ingredients}
            setIngredients={setIngredients}
            setIngredientTerm={setIngredientTerm}
            keywordTerm={keywordTerm}
            setKeywordTerm={setKeywordTerm}
            keywords={keywords}
            setKeywords={setKeywords}
          />
          <div>
            <button
              className="bg-black px-3 py-2 rounded-full"
              onClick={addToDatabase}
            >
              <span className="text-2xl text-white">Add Smoothie</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
