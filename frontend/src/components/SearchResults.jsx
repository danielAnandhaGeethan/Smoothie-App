import React, { useEffect, useState } from "react";
import axios from "axios";
import Smoothie from "./Smoothie";

const SearchResults = ({ tags, isLoggedIn, globalMbn, globalPass }) => {
  const [smoothies, setSmoothies] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [started, setStarted] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (tags.length) {
      axios
        .get(`http://localhost:5555/smoothies/${tags}`)
        .then((res) => {
          setStarted(true);
          if (res.data.message) {
            setDataAvailable(false);
          } else {
            setDataAvailable(true);
            setSmoothies(res.data);
          }
        })
        .catch((err) => {
          console.log("Error");
        });
    } else {
      setStarted(false);
    }
  }, [tags]);

  return started ? (
    !dataAvailable ? (
      <div className="mx-10 my-10">
        <div className="px-32 py-10 flex justify-center">
          <h1 className="text-4xl text-center pt-20 pb-96">
            <span className="font-bold">OOPS!!! </span>Your drink desires remain
            unsatisfied, as no results align with your taste.
          </h1>
        </div>
      </div>
    ) : (
      <div className="my-10 flex justify-center">
        <div className="px-10 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {smoothies.map((smoothie, index) => (
            <Smoothie
              key={index}
              index={index}
              smoothie={smoothie}
              value={value}
              setValue={setValue}
              isLoggedIn={isLoggedIn}
              globalMbn={globalMbn}
              globalPass={globalPass}
              isFavouritePage={false}
            />
          ))}
        </div>
      </div>
    )
  ) : (
    <div className="mx-10 my-10">
      <div className="px-32 pt-20 pb-96 flex justify-center">
        <h1 className="text-4xl text-center">
          Let's dive into the drinkiverse and find your perfect sip!
        </h1>
      </div>
    </div>
  );
};

export default SearchResults;
