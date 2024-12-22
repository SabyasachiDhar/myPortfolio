import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const projectData = [
    {
        companyName: "Company Name",
        date: "13th of January 2020 to till",
        projectName: "MQM(Manufacturing Quality Management)",
        client: "Apple Inc",
        description: "this application is a kind of a tools to manage apple product manufacturing information detail as well as manufacturers product insights.",
        contribution: "My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's. My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's. My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's.",
        projectDetailsMore: ''
    },
    {
        companyName: "Company Name",
        date: "13th of January 2020 to till",
        projectName: "MQM(Manufacturing Quality Management)",
        client: "Apple Inc",
        description: "this application is a kind of a tools to manage apple product manufacturing information detail as well as manufacturers product insights.",
        contribution: "My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's.",
        projectDetailsMore: "My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's."
    },
    {
        companyName: "Company Name",
        date: "13th of January 2020 to till",
        projectName: "MQM(Manufacturing Quality Management)",
        client: "Apple Inc",
        description: "this application is a kind of a tools to manage apple product manufacturing information detail as well as manufacturers product insights.",
        contribution: "My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's.",
        projectDetailsMore: ''
    },
    {
        companyName: "Company Name",
        date: "13th of January 2020 to till",
        projectName: "MQM(Manufacturing Quality Management)",
        client: "Apple Inc",
        description: "this application is a kind of a tools to manage apple product manufacturing information detail as well as manufacturers product insights.",
        contribution: "My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's. My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's.",
        projectDetailsMore: ''
    },
]

function Projects() {
    return (
        <div className='container pt-4'>
            <div class="row">
            <h2>Projects Page</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry>
                        {projectData.map((pdata, index) => (
                            <Card
                                bg='light'
                                key={index}
                                className="m-1"
                            >
                                <Card.Header>{pdata.projectName}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{pdata.projectName}</Card.Title>
                                    <Card.Text>
                                        <p><strong>Description:</strong> {pdata.description}</p>
                                        <p><strong>My contribution:</strong> {pdata.contribution}</p>
                                        {pdata.projectDetailsMore && <Button variant="primary">More</Button>}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

            </div>
        </div>
    );
}

export default Projects;
