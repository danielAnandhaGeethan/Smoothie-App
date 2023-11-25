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
  globalPass,
  setGlobalPass,
}) => {
  const [tags, setTags] = useState([]);

  return (
    <div className="bg-gradient-to-b from-[#f9f8eb] via-[#ffe1b6] to-[#7a9eb1] via-[#415865]">
      <NavBar
        isLoggedIn={isLoggedIn}
        globalUsername={globalUsername}
        setGlobalUsername={setGlobalUsername}
        setGlobalMbn={setGlobalMbn}
        setIsLoggedIn={setIsLoggedIn}
        setGlobalPass={setGlobalPass}
      />
      <About />
      <Learn />
      <SearchBar tags={tags} setTags={setTags} />
      <SearchResults
        tags={tags}
        isLoggedIn={isLoggedIn}
        globalMbn={globalMbn}
        globalPass={globalPass}
      />
      <Post />
    </div>
  );
};

export default Home;
