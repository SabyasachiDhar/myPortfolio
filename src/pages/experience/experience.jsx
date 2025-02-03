import React from "react";
import { experienceData } from "../../data/data";

const Experience = () => {
  return (
    <section className="my-4">
      <h2>Experience</h2>
      {experienceData.map((item, index) => (
        <div key={index}>
          <p>
            <strong>Company: </strong>{item.company}
            <br />
            <strong>Role: </strong>{item.role}
            <br />
            <strong>Duration: </strong>{item.startDate} to {item.endDate}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
