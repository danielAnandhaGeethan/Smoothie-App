import React from "react";
import cross from "../assets/cross.png";

const SearchTag = ({ removeTag, tag }) => {
  return (
    <div className="py-1 px-2 flex gap-1 border border-black rounded-full">
      <button onClick={() => removeTag(tag)}>
        <img src={cross} alt="remove" className="h-6" />
      </button>
      <span className="text-lg">{tag}</span>
    </div>
  );
};

export default SearchTag;
