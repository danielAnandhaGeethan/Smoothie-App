import React, { useEffect, useState } from "react";
import star from "../assets/star.png";
import clock from "../assets/clock.png";
import liked from "../assets/liked.png";
import not_liked from "../assets/not_liked.png";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import axios from "axios";

const Smoothie = ({
  index,
  smoothie,
  value,
  setValue,
  isLoggedIn,
  globalMbn,
  globalPass,
  isFavouritePage,
}) => {
  const [favs, setFavs] = useState([]);
  const [heart, setHeart] = useState(null);

  const colors = [
    "bg-[#BD83B8]",
    "bg-[#6DA5C0]",
    "bg-[#1D1A39]",
    "bg-[#F1916D]",
    "bg-[#DFB6B2]",
    "bg-[#AE445A]",
    "bg-[#384358]",
    "bg-[#854F6C]",
    "bg-[#86A8CF]",
    "bg-[#294D61]",
    "bg-[#473E66]",
  ];

  useEffect(() => {
    const data = [globalMbn, globalPass];

    axios.get(`http://localhost:5555/users/${data}`).then((res) => {
      const userFavs = res.data[0].favs;

      setHeart(
        userFavs.some((fav) => JSON.stringify(fav) === JSON.stringify(smoothie))
          ? liked
          : not_liked
      );
    });
  });

  const like = async () => {
    if (!isLoggedIn) {
      enqueueSnackbar("Login to Add Smoothies to Favourites", {
        variant: "info",
        autoHideDuration: 3000,
      });
      return;
    }

    const data = [globalMbn, globalPass];

    axios
      .get(`http://localhost:5555/users/${data}`)
      .then((res) => {
        const userFavs = res.data[0].favs;

        const isPresent = userFavs.some(
          (fav) => JSON.stringify(fav) === JSON.stringify(smoothie)
        );

        if (isPresent) {
          const updatedFavs = userFavs.filter(
            (fav) => JSON.stringify(fav) !== JSON.stringify(smoothie)
          );

          setFavs(updatedFavs);
          setHeart(not_liked);

          axios
            .post(`http://localhost:5555/users/${data}`, { favs: updatedFavs })
            .then((res) => {
              console.log(res);
            });
        } else {
          const updatedFavs = [...userFavs, smoothie];
          setFavs(updatedFavs);
          setHeart(liked);

          axios
            .post(`http://localhost:5555/users/${data}`, {
              favs: updatedFavs,
            })
            .then((res) => {
              console.log(res);
            });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-3 flex flex-col items-center mb-20">
      <SnackbarProvider />
      <div
        className={`${
          isFavouritePage
            ? "max-w-80 h-80 p-5 w-80 rounded-xl border shadow-xl bg-[#f8fcfb] bg-opacity-20 hover:scale-105"
            : "max-w-80 h-80 p-5 mx-5 w-80 rounded-xl border-black border-l border-t shadow-xl hover:scale-105 bg-opacity-60"
        } ${!isFavouritePage ? colors[index <= 10 ? index : index % 11] : ""}`}
        onClick={() => setValue(value === index ? null : index)}
      >
        {value === index ? (
          <div className="flex flex-col justify-center gap-2 py-2">
            <h1 className="text-2xl">Steps</h1>
            <div className="flex flex-col items-start gap-3">
              {smoothie.ingredients.map((ingredient) => (
                <div className="italic">• {ingredient}</div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-2xl text-center">{smoothie.title}</h1>
            <h1 className="text-lg">{smoothie.description}</h1>
            <div className="flex justify-between px-4">
              <h1 className="flex gap-1 items-center">
                <img src={clock} className="h-5" alt="clock" />
                {smoothie.preptime}
              </h1>
              <h1 className="flex gap-1">
                <img src={star} className="h-5" alt="rating" />
                {smoothie.rating}
              </h1>
            </div>
          </div>
        )}
      </div>
      {isFavouritePage ? (
        ""
      ) : (
        <div className="flex justify-center h-10">
          <div className="flex justify-end mt-5 px-7 w-80">
            <img
              src={heart}
              onClick={like}
              alt="like"
              className="h-8 cursor-pointer hover:scale-110"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Smoothie;
