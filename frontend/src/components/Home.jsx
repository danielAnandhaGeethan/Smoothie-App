import React, { useState } from "react";
import NavBar from "./NavBar";
import Learn from "./Learn";
import About from "./About";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Post from "./Post";

const Home = ({ loggedIn }) => {
  const [tags, setTags] = useState([]);

  return (
    <>
      <NavBar />
      <About />
      <Learn />
      <SearchBar tags={tags} setTags={setTags} />
      <SearchResults tags={tags} loggedIn={loggedIn} />
      <Post />
    </>
  );
};

export default Home;
