import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { skillData } from "../../data/data";

// StarRating component
const StarRating = ({ rating }) => {
  return (
  <div className="rating">
    <span>
      <i
        style={{ color: "#f39c12" }}
        className={
          rating >= 1
            ? "fas fa-star"
            : rating >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
    <span>
      <i
        style={{ color: "#f39c12" }}
        className={
          rating >= 2
            ? "fas fa-star"
            : rating >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
    <span>
      <i
        style={{ color: "#f39c12" }}
        className={
          rating >= 3
            ? "fas fa-star"
            : rating >= 2.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
    <span>
      <i
        style={{ color: "#f39c12" }}
        className={
          rating >= 4
            ? "fas fa-star"
            : rating >= 3.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
    <span>
      <i
        style={{ color: "#f39c12" }}
        className={
          rating >= 5
            ? "fas fa-star"
            : rating >= 4.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
  </div>
  )
};

// RatingCard component
const RatingCard = memo(({ skill }) => (
  <div className="card p-0 my-1 col-md-4 col-lg-3 col-sm-6">
    <div className="card-body p-3 py-2 d-flex justify-content-between align-items-center">
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
