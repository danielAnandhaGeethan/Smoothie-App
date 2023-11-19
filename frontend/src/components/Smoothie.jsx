import React from "react";
import star from "../assets/star.png";
import clock from "../assets/clock.png";
import liked from "../assets/liked.png";
import not_liked from "../assets/not_liked.png";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Smoothie = ({ index, smoothie, value, setValue, loggedIn }) => {
  const colors = [
    "bg-yellow-500",
    "bg-pink-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-red-500",
    "bg-teal-500",
  ];

  return (
    <div className="my-3 flex flex-col items-center mb-20">
      <div
        className={`max-w-80 h-80 p-5 mx-5 w-80 rounded-xl border-black border-l border-t shadow-xl hover:scale-105 ${
          colors[index <= 7 ? index : index % 8]
        } bg-opacity-60`}
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
      <div className="flex justify-center h-10">
        <div className="flex justify-end mt-5 px-7 w-80">
          <img
            src={not_liked}
            alt="like"
            className="h-8 cursor-pointer hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Smoothie;
