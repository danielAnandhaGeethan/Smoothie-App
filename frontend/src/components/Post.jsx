import React, { useState } from "react";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import axios from "axios";
import Form from "./Form";
import bg from "../assets/postBg.jpg";

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
      !title === "" ||
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
      enqueueSnackbar("Smoothie Added", { variant: "success" });
    });
  };

  return (
    <div className="w-full h-full pt-20 mb-10" name="post">
      <SnackbarProvider />
      <div
        className="flex justify-center"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="mx-20 2xl:mx-48 pt-10 pb-8 flex flex-col items-center gap-10 bg-black bg-opacity-20 w-[60%]">
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
