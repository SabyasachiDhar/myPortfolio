import React from "react";
import { Card } from "react-bootstrap";
import ReadMore from "../../utils/readMore/readMore.utils";

const ProjectCard = React.memo(({ project }) => (
  <Card bg="light" className="m-1">
    <Card.Header><Card.Title>{project.projectName}</Card.Title></Card.Header>
    <Card.Body>
      <Card.Text>
				<p>
          <strong>Client:</strong> {project.client}
        </p>
				<p>
          <strong>Duration:</strong> {project.duration}
        </p>
        <p>
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>My contribution:</strong> {project.contribution}
					{project.projectDetailsMore && (
          <ReadMore>
            {project.projectDetailsMore}
          </ReadMore>
        )}
        </p>
        
      </Card.Text>
    </Card.Body>
  </Card>
));

export default ProjectCard;
