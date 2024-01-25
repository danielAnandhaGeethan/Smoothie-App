import React from "react";
import cross from "../assets/cross.png";
import add from "../assets/add.png";

const KeywordsInput = ({
  keywordTerm,
  setKeywordTerm,
  keywords,
  setKeywords,
}) => {
  const removeKeywords = (key) => {
    const x = keywords.filter((keyword) => keyword !== key);

    setKeywords(x);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex">
        <div>
          <h1 className="px-2 text-lg text-white">Keywords</h1>
          <input
            value={keywordTerm}
            className="shadow-lg px-5 py-2 rounded-2xl border border-t border-l outline-none"
            onChange={(e) => setKeywordTerm(e.target.value)}
          />
        </div>
        <button className="flex flex-col justify-end absolute mt-9 ml-[175px] pl-3">
          <img
            src={add}
            alt="Add"
            className="h-6 hover:scale-105"
            onClick={() => {
              setKeywords([...keywords, keywordTerm]);
              setKeywordTerm("");
            }}
          />
        </button>
      </div>
      <div className="w-80">
        <div className="flex flex-wrap">
          {keywords.map((keyword, index) => (
            <div key={index} className="m-2">
              <button className="flex flex-row bg-gray-200 gap-1 items-center px-2 py-1 rounded-full justify-center">
                <img
                  src={cross}
                  alt="remove"
                  className="h-5"
                  onClick={() => removeKeywords(keyword)}
                />
                <div>
                  <span>{keyword}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeywordsInput;
