import React from "react";
import SkillsList from "../../components/ratingCard";
import Slideshow from "../../components/slideShow/slideShow";
import AboutMe from "../aboutMe/aboutMe";


function Home() {
  return (
    <div className="container">
      <Slideshow />
      <AboutMe />
      <SkillsList />
    </div>
  );
}

export default Home;
