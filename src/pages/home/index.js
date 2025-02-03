import React from "react";
import SkillsList from "../../components/ratingCard";
import Slideshow from "../../components/slideShow/slideShow";
import AboutMe from "../aboutMe/aboutMe";
import Experience from "../experience/experience";


function Home() {
  return (
    <div className="container">
      <Slideshow />
      <AboutMe />
      <SkillsList />
      <Experience />
    </div>
  );
}

export default Home;
