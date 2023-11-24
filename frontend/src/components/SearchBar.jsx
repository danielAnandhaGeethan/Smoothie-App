import { useState } from "react";
import blender from "../assets/blender.png";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import SearchTag from "./SearchTag";

const SearchBar = ({ tags, setTags }) => {
  const [search, setSearch] = useState("");

  const addTag = (e) => {
    e.preventDefault();

    if (search === "") {
      enqueueSnackbar("Enter Ingredient", {
        variant: "error",
        autoHideDuration: 5000,
      });
      return;
    }

    const x = [...tags, search.toLowerCase()];
    setTags(x);
    setSearch("");
  };

  const removeTag = (tag) => {
    let key = tag;
    const x = tags.filter((tag) => tag !== key);
    setTags(x);
  };

  return (
    <div className="mt-48 pt-24" name="find">
      <SnackbarProvider />
      <div>
        <div className="flex justify-center py-5">
          <div className="flex gap-7">
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 pr-32 border pl-3 rounded-full shadow-lg outline-none"
                placeholder="Enter Ingredient . . ."
              />
            </div>
            <div>
              <button onClick={addTag}>
                <img src={blender} alt="Search" className="h-10 w-10" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-3 p-10 flex justify-center gap-2">
          {tags.map((tag, index) => (
            <SearchTag key={index} removeTag={removeTag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
