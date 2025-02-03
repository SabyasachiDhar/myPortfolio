import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./readMore.styles.scss";

const ReadMore = ({ children, initialVisible = false }) => {
  const [isVisible, setIsVisible] = useState(initialVisible);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <span>
      {isVisible && <span> {children}</span>}
      <Button variant="link" onClick={toggleVisibility} className="p-0 m-0 text-decoration-none custom-link">
        {isVisible ? ". . .Less" : ". . .Read More"}
      </Button>
    </span>
  );
};

export default ReadMore;
