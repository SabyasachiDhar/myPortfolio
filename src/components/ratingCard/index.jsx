import React, { memo, useMemo, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Col, Container } from "react-bootstrap";

// Updated skillData array of objects
const skillData = [
  {
    skilId: 1,
    skillType: "Languages",
    skillNames: [
      { name: "JavaScript", rating: 4 },
      { name: "Typescript", rating: 4 },
      { name: "HTML & HTML5", rating: 4 },
      { name: "CSS & CSS3", rating: 4 },
      { name: "SCSS & LESS", rating: 4 },
    ],
  },
  {
    skilId: 2,
    skillType: "SDLC Methidologies",
    skillNames: [
      { name: "Waterfall", rating: 4 },
      { name: "Scrum & Agile", rating: 4 },
      { name: "Kanban", rating: 4 },
      { name: "DevOps", rating: 4 },
    ],
  },
  {
    skilId: 3,
    skillType: "Tools",
    skillNames: [
      { name: "Jira", rating: 4 },
      { name: "Github", rating: 4 },
      { name: "Rally", rating: 4 },
      { name: "MS Teams", rating: 4 },
    ],
  },
  {
    skilId: 4,
    skillType: "IDE",
    skillNames: [
      { name: "VS Code", rating: 4 },
      { name: "Brackets", rating: 3 },
      { name: "Sublime Text", rating: 3 },
    ],
  },
  {
    skilId: 5,
    skillType: "Web Technologies",
    skillNames: [
      { name: "React", rating: 4.5 },
      { name: "Redux", rating: 4.5 },
      { name: "Angular", rating: 3 },
      { name: "Node", rating: 3 },
      { name: "Express", rating: 3 },
      { name: "MongoDB", rating: 3 },
      { name: "PostgreSQL", rating: 2.5 },
      { name: "Azure", rating: 2.5 },
      { name: "Netlify", rating: 2.5 },
    ],
  },
  {
    skilId: 6,
    skillType: "Unit Testing",
    skillNames: [
      { name: "Jest", rating: 4 },
      { name: "Enzyme", rating: 4 },
    ],
  },
  {
    skilId: 7,
    skillType: "Version Control",
    skillNames: [{ name: "GIT", rating: 4 }],
  },
  {
    skilId: 8,
    skillType: "Soft Skills",
    skillNames: [
      { name: "Effective communication", rating: 4 },
      { name: "Teamwork", rating: 4 },
      { name: "Problem-solving", rating: 4 },
      { name: "Adaptability", rating: 4 },
      { name: "Time Management", rating: 4 },
      { name: "Conflict Management", rating: 4 },
      { name: "Leadership", rating: 4 },
      { name: "Strategic Thinking", rating: 4 },
      { name: "Interpersonal Skills", rating: 4 },
    ],
  },
];

// StarRating component
const StarRating = ({ rating }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => (
        <OverlayTrigger
          key={i}
          placement="top"
          overlay={<Tooltip>{rating}</Tooltip>}
        >
          <i
            style={{ fontSize: "0.75rem" }}
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
  <Col className="card my-2 col-md-3 col-xs-6">
    <div className="card-body d-flex justify-content-between align-items-center">
      <span className="card-title m-0">{skill.name}</span>
      <StarRating rating={skill.rating} />
    </div>
  </Col>
));

// Main component
const SkillsList = () => {
  return (
    <div>
      <h2>Skills</h2>
      <Container className="my-4 p-0">
        {skillData.map((skillCategory) => (
          <div key={skillCategory.skilId}>
            <h3 className="my-3">{skillCategory.skillType}</h3>
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
