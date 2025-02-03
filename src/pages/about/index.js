import React from "react";
import AboutMe from "../aboutMe/aboutMe";
import RolesResponsibilities from "../myRolesResponsibilities/RolesResponsibilities";
import MyHobbies from "../myHobbis/myHobbis";

function About() {
  return (
    <div className="container pt-4">
			<AboutMe />
      <RolesResponsibilities />
			<MyHobbies />
    </div>
  );
}

export default About;
