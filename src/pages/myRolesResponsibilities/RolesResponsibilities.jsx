import React from "react";
import { Accordion } from "react-bootstrap";
import { rolesResponsibilitiesData } from "../../data/data";

const RolesResponsibilities = () => {
  return (
    <div>
      <h2 className="mb-4">My Roles and Responsibilities</h2>
      {rolesResponsibilitiesData?.map((item, index) => {
        return (
          <Accordion defaultActiveKey={["1"]} alwaysOpen key={index}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                <h5>{item.header}</h5>
              </Accordion.Header>
              <Accordion.Body>
                {item.data.map((el, subIndex) => {
                  return (
                    <p key={subIndex}>
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
};

export default RolesResponsibilities;
