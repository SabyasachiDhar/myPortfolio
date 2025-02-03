import React, { memo, useMemo, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { skillData } from "../../data/data";

// StarRating component
const StarRating = ({ rating }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => (
        <OverlayTrigger
          key={i}
          placement="bottom"
          overlay={<Tooltip>Skill rate: {rating}</Tooltip>}
        >
          <i
            style={{ fontSize: "1rem" }}
            className={`fa-star ${
              i < Math.round(rating) ? "fas text-warning" : "far text-muted"
            }`}
          ></i>
        </OverlayTrigger>
      )),
    [rating]
  );

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return <div>{stars}</div>;
};

// RatingCard component
const RatingCard = memo(({ skill }) => (
  <div className="card p-0 my-1 col-md-4 col-lg-3 col-sm-6">
    <div className="card-body p-3 d-flex justify-content-between align-items-center">
      <span className="card-title m-0">{skill.name}</span>
      <StarRating rating={skill.rating} />
    </div>
  </div>
));

// Main component
const SkillsList = () => {
  return (
    <div>
      <h2>My Skills</h2>
      <Container className="my-3 p-0">
        {skillData.map((skillCategory) => (
          <div key={skillCategory.skilId}>
            <h6 className="my-3">{skillCategory.skillType}</h6>
            <div className="d-flex flex-wrap">
              {skillCategory.skillNames.map((skill, index) => (
                <RatingCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default SkillsList;
