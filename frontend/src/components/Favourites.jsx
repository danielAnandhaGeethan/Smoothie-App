import React, { useEffect, useState } from "react";
import SecondNavbar from "./SecondNavbar";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Smoothie from "./Smoothie";

const Favourites = ({ globalMbn, globalPass, isLoggedIn }) => {
  const [favs, setFavs] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const data = [globalMbn, globalPass];

    axios
      .get(`http://localhost:5555/users/${data}`)
      .then((res) => {
        const userFavs = res.data[0].favs;

        setFavs(userFavs);
      })
      .catch((err) => {
        if (err.response.data && err.response.data.message) {
          if (err.response.data.message === "No such user") {
            enqueueSnackbar("Login to View Favourites", {
              variant: "info",
              autoHideDuration: 3000,
            });
          }
        }
      });
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f8eb] via-[#ffe1b6] to-[#7a9eb1] via-[#415865]">
      <SnackbarProvider />
      <SecondNavbar />
      <div className="py-20 px-8">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favs.map((fav, index) => (
            <Smoothie
              key={index}
              index={index}
              smoothie={fav}
              value={value}
              setValue={setValue}
              isLoggedIn={isLoggedIn}
              globalMbn={globalMbn}
              globalPass={globalPass}
              isFavouritePage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
