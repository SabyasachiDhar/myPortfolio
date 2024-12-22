import React from 'react';
import { Accordion } from 'react-bootstrap';

const rolesResponsibilitiesData = [
    {
        header: "Front-End Development",
        data: [
            {
                name: "UI/UX Design Integration",
                content: "Translate design wireframes into high-quality code and ensure the technical feasibility of UI/UX designs."
            },
            {
                name: "Component Development",
                content: "Build reusable React components to be used across the application."
            },
            {
                name: "State Management",
                content: "Implement and manage state within the application using state management libraries like Redux or Context API."
            },
            {
                name: "Performance Optimization",
                content: "Optimize the application for maximum speed and scalability."
            },
            {
                name: "UI/UX Design Integration",
                content: "Translate design wireframes into high-quality code and ensure the technical feasibility of UI/UX designs."
            },
            {
                name: "Responsive Design",
                content: "Ensure the application is responsive across various devices and browsers."
            },
            {
                name: "Testing",
                content: "Write unit, integration, and end-to-end tests to ensure code quality using tools like Jest, React Testing Library, and Cypress."
            },
        ]
    },
    {
        header: "Back-End Development",
        data: [
            {
                name: "API Development",
                content: "Design and develop RESTful APIs or GraphQL endpoints to be consumed by the front end."
            },
            {
                name: "Database Management",
                content: "Work with databases (SQL or NoSQL) to design schemas, write queries, and ensure data consistency."
            },
            {
                name: "Server Management",
                content: "Set up, manage, and maintain server environments, ensuring robust application deployment using technologies like Node.js, Express.js, or similar."
            },
            {
                name: "Security Best Practices",
                content: "Implement security and data protection measures."
            },
            {
                name: "Integration",
                content: "Integrate third-party services and APIs."
            },
        ]
    },
    {
        header: "Collaboration",
        data: [
            {
                name: "Agile Methodologies",
                content: "Participate in agile ceremonies such as stand-ups, sprint planning, and retrospectives."
            },
            {
                name: "Code Reviews",
                content: "Conduct and participate in code reviews to ensure code quality and share knowledge."
            },
            {
                name: "Documentation",
                content: "Write and maintain documentation for code, APIs, and other technical processes."
            },
            {
                name: "Cross-Functional Collaboration",
                content: "Work closely with designers, product managers, and other developers to deliver features and products."
            },
            {
                name: "Agile Methodologies",
                content: "Participate in agile ceremonies such as stand-ups, sprint planning, and retrospectives."
            },
        ]
    },
    {
        header: "Continuous Learning",
        data: [
            {
                name: "Stay Updated",
                content: "Keep up with the latest industry trends and advancements in web technologies, particularly React and full stack development."
            },
            {
                name: "Skill Improvement",
                content: "Continuously improve coding skills and knowledge of new frameworks and technologies."
            }
        ]
    }
]

function About() {
    return (
        <div className='container pt-4'>
            <h2>Roles and Responsibilities</h2>
            {
                rolesResponsibilitiesData?.map((item, index) => {
                    return (
                        <Accordion defaultActiveKey={['1']} alwaysOpen>
                            <Accordion.Item eventKey={index - 1}>
                                <Accordion.Header><h5>{item.header}</h5></Accordion.Header>
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
                    )
                })
            }
        </div>
    );
}

export default About;
