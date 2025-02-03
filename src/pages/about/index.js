import React from "react";
import { Accordion } from "react-bootstrap";
import { rolesResponsibilitiesData } from "../../data/data";
import AboutMe from "../aboutMe/aboutMe";

function About() {
  return (
    <div className="container pt-4">
			<AboutMe />
      <h2 className="mb-4">My Roles and Responsibilities</h2>
      {rolesResponsibilitiesData?.map((item, index) => {
        return (
          <Accordion defaultActiveKey={["1"]} alwaysOpen>
            <Accordion.Item eventKey={index - 1}>
              <Accordion.Header>
                <h5>{item.header}</h5>
              </Accordion.Header>
              <Accordion.Body>
                {item.data.map((el, index) => {
                  return (
                    <p key={index}>
                      <strong>{el.name}: </strong>
                      {el.content}
                    </p>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
}

export default About;
