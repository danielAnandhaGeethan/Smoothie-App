import React, { useState } from "react";
import NavBar from "./NavBar";
import Learn from "./Learn";
import About from "./About";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Post from "./Post";

const Home = ({
  isLoggedIn,
  globalMbn,
  globalUsername,
  setGlobalUsername,
  setGlobalMbn,
  setIsLoggedIn,
}) => {
  const [tags, setTags] = useState([]);

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        globalUsername={globalUsername}
        setGlobalUsername={setGlobalUsername}
        setGlobalMbn={setGlobalMbn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <About />
      <Learn />
      <SearchBar tags={tags} setTags={setTags} />
      <SearchResults
        tags={tags}
        isLoggedIn={isLoggedIn}
        globalMbn={globalMbn}
      />
      <Post />
    </>
  );
};

export default Home;
