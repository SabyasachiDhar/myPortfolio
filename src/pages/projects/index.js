import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const projectData = [
    {
        companyName: "Beverage Company",
        date: "April 2024 August 2025",
        projectName: "Real Time Data Dashboard",
        client: "Diagio",
        description: "This dashboard app for Diagio sales data features customizable dashboards, sales overviews, performance metrics, financial insights, and market analysis. It ensures data security with user authentication and encryption, and supports multiple languages and accessibility. The tool helps Diagio monitor financial acitivities, gain insights, and make data-driven decisions efficiently.",
        contribution: "As a React Redux developer on the Diagio sales dashboard project, my contributions included creating and implementing Microsoft PCF (PowerApps Component Framework) control components. Utilizing React, I developed these components to seamlessly integrate and perform optimally within the dashboard...",
        projectDetailsMore: 'Additionally, I leveraged Chart.jsand D3.js to create dynamic and interactive data visualizations, enhancing the presentation of sales data and insights. I managed the publication process of these PCF components, ensuring their deployment and accessibility. My work on this project helped Diagio improve sales monitoring and decision-making processes. Manage ADO (Azure DevOps) for the project, creating and managing user stories, tasks, and sprints. I collaborated with the back-end team to ensure seamless integration of front-end components with the server-side logic.'
    },
    {
        companyName: "US Based Insurance Company",
        date: "July 2020 to Mearch 2024",
        projectName: "Insurance Policy Management System",
        client: "Guidewire",
        description: "This insurance policy management system is a web application that allows users to manage insurance policies, claims, billings and customer information. It features a user-friendly interface, secure data storage, and real-time updates. The system helps insurance companies streamline policy management, improve customer service, and enhance data security.",
        contribution: "My contribution to this project as a React Redux developer included developing the front-end interface and user experience. I implemented React components and Redux state management to create a responsive and interactive user interface. I also integrated APIs to fetch and display policy data, claims information, and customer details.",
        projectDetailsMore: "Additionally, manage ADO (Azure DevOps) for the project, creating and managing user stories, tasks, and sprints. I collaborated with the back-end team to ensure seamless integration of front-end components with the server-side logic."
    },
    {
        companyName: "US Based Key Compititors Insigt tool",
        date: "August 2018 to March 2020",
        projectName: "Bluesky (Bluemine)",
        client: "IBM",
        description: "This application is a kind of a tools to view the key competitors insights and generate the report as per the user's requirement. This tool is used by the IBM sales team to get the insights of the key competitors and their different segment report.",
        contribution: "My Contribution to that project as a react redux developer to showing those manufacturers information to the browser's.",
        projectDetailsMore: ''
    },
    {
        companyName: "",
        date: "Nov 2016 to June 2017",
        projectName: "Nextgen",
        client: "IBM",
        description: "Migration projects to cloud automatically and generate report.",
        contribution: ": Development using React, Redux, CSS3",
        projectDetailsMore: ''
    },
    {
        companyName: "Cognitive Content Collator",
        date: "Nov 2016 to June 2017",
        projectName: "This is a Learning site for internal use for IBM.",
        client: "IBM",
        description: "this application is a kind of a tools to manage apple product manufacturing information detail as well as manufacturers product insights.",
        contribution: "Development using HTML5, CSS and CSS3, Angular js, jQuery, Javascript",
        projectDetailsMore: ''
    },
];

const ProjectCard = React.memo(({ project }) => (
    <Card bg='light' className="m-1">
        <Card.Header>{project.projectName}</Card.Header>
        <Card.Body>
            <Card.Title>{project.projectName}</Card.Title>
            <Card.Text>
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>My contribution:</strong> {project.contribution}</p>
                {project.projectDetailsMore && <Button variant="primary">More</Button>}
            </Card.Text>
        </Card.Body>
    </Card>
));

function Projects() {
    return (
        <div className='container pt-4'>
            <div className="row">
                <h2>Projects Page</h2>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
}

export default Projects;