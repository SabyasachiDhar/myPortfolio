import React from "react";
import { aboutDescription } from "../../data/data";

const AboutMe = () => {
  return (
    <section className="my-4">
      <h2>About Me</h2>
      <p>
        {aboutDescription}
      </p>
    </section>
  );
};

export default AboutMe;
